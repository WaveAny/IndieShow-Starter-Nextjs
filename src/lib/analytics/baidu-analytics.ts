/**
 * 百度统计配置和工具函数
 *
 * 这个文件包含百度统计的配置信息和相关工具函数，
 * 用于在应用程序中跟踪页面访问和事件。
 */

// 百度统计的跟踪 ID
export const BAIDU_ID = process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID

// 环境变量
const isDevelopment = process.env.NODE_ENV === "development"

// 初始化百度统计
export function initBaiduAnalytics() {
  if (!BAIDU_ID) {
    if (isDevelopment) {
      console.warn("Baidu Analytics: Site ID not set")
    }
    return
  }

  try {
    // 初始化百度统计数组
    window._hmt = window._hmt || []

    // 加载百度统计脚本
    const script = document.createElement("script")
    script.async = true
    script.src = `https://hm.baidu.com/hm.js?${BAIDU_ID}`

    // 添加加载错误处理
    script.onerror = () => {
      if (isDevelopment) {
        console.error("Baidu Analytics: Script loading failed")
      }
    }

    document.head.appendChild(script)
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Baidu Analytics: Initialization failed", error)
    }
  }
}

// 百度统计推送函数
export function push(...args: any[]) {
  if (!BAIDU_ID)
    return

  try {
    if (typeof window !== "undefined" && window._hmt) {
      window._hmt.push([...args])
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Baidu Analytics: Push failed", error)
    }
  }
}

// 页面浏览跟踪函数
export function pageview(url: string) {
  if (!BAIDU_ID)
    return

  try {
    if (typeof window !== "undefined" && window._hmt) {
      window._hmt.push(["_trackPageview", url])
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Baidu Analytics: Page tracking failed", error)
    }
  }
}

// 事件跟踪函数
export function event(category: string, action: string, label?: string, value?: number) {
  if (!BAIDU_ID)
    return

  try {
    if (typeof window !== "undefined" && window._hmt) {
      window._hmt.push(["_trackEvent", category, action, label, value])
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Baidu Analytics: Event tracking failed", error)
    }
  }
}

// 声明全局 window 对象上的类型
declare global {
  interface Window {
    _hmt: any[]
  }
}
