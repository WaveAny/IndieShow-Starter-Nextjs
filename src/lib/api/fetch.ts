/**
 * 优化的数据获取工具
 * 实现Next.js 15中推荐的数据获取模式
 */

type FetchOptions = RequestInit & {
  /** 缓存策略 */
  cache?: "force-cache" | "no-store"
  /** 缓存有效时间(秒) */
  revalidate?: number
  /** 超时时间(毫秒) */
  timeout?: number
  /** 重试次数 */
  retries?: number
}

/**
 * 优化的fetch函数，支持缓存控制、超时控制和重试机制
 *
 * @param url 请求地址
 * @param options 请求选项
 * @returns 请求结果
 *
 * @example
 * // 默认缓存 (force-cache)
 * const data = await fetchData('/api/data');
 *
 * // 不缓存数据 (no-store)
 * const data = await fetchData('/api/data', { cache: 'no-store' });
 *
 * // 增量静态再生成 (ISR) - 每10秒更新一次
 * const data = await fetchData('/api/data', { revalidate: 10 });
 */
export async function fetchData<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const {
    cache = "force-cache",
    revalidate,
    timeout = 10000,
    retries = 2,
    ...fetchOptions
  } = options

  // 构建fetch选项
  const fetchOpts: RequestInit = {
    ...fetchOptions,
    next: {
      ...(revalidate !== undefined ? { revalidate } : {}),
    },
    cache,
  }

  // 添加超时控制
  const fetchWithTimeout = async (): Promise<Response> => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...fetchOpts,
        signal: controller.signal,
      })
      return response
    }
    finally {
      clearTimeout(timeoutId)
    }
  }

  // 添加重试机制
  let lastError: unknown

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout()

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
      }

      return await response.json() as T
    }
    catch (error) {
      lastError = error

      // 如果是最后一次尝试，则抛出错误
      if (attempt === retries) {
        break
      }

      // 非中止错误才重试
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        // 指数退避重试延迟
        const delay = Math.min(500 * (2 ** attempt), 3000)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}
