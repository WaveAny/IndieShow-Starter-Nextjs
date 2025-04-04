/**
 * Plausible 配置和工具函数
 *
 * 这个文件包含 Plausible 的配置信息，
 * 用于在应用程序中跟踪用户行为和统计数据。
 */

// Plausible 的域名
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

// Plausible 的脚本地址
export const PLAUSIBLE_SCRIPT_URL = "https://plausible.io/js/script.js"

// 环境变量
const isDevelopment = process.env.NODE_ENV === "development"

// 初始化 Plausible 统计
export function initPlausibleAnalytics() {
  if (!PLAUSIBLE_DOMAIN) {
    if (isDevelopment) {
      console.warn("Plausible Analytics: Domain not set")
    }
    return
  }

  try {
    const script = document.createElement("script")
    script.async = true
    script.defer = true
    script.setAttribute("data-domain", PLAUSIBLE_DOMAIN)
    script.src = PLAUSIBLE_SCRIPT_URL

    // 添加加载错误处理
    script.onerror = () => {
      if (isDevelopment) {
        console.error("Plausible Analytics: Script loading failed")
      }
    }

    document.head.appendChild(script)
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Plausible Analytics: Initialization failed", error)
    }
  }
}

// 事件跟踪函数
export function event(eventName: string, props?: Record<string, string | number | boolean>) {
  if (!PLAUSIBLE_DOMAIN)
    return

  try {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(eventName, { props })
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Plausible Analytics: Event tracking failed", error)
    }
  }
}

// 声明全局 window 对象上的类型
declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: {
        props?: Record<string, string | number | boolean>
        callback?: () => void
      }
    ) => void
  }
}
