/**
 * Umami 配置和工具函数
 *
 * 这个文件包含 Umami 的配置信息，
 * 用于在应用程序中跟踪用户行为和统计数据。
 */

// Umami 的网站 ID
export const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

// Umami 的脚本地址
export const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js"

// 环境变量
const isDevelopment = process.env.NODE_ENV === "development"

// 初始化 Umami 统计
export function initUmamiAnalytics() {
  if (!UMAMI_WEBSITE_ID) {
    if (isDevelopment) {
      console.warn("Umami Analytics: Website ID not set")
    }
    return
  }

  try {
    const script = document.createElement("script")
    script.async = true
    script.defer = true
    script.setAttribute("data-website-id", UMAMI_WEBSITE_ID)
    script.src = UMAMI_SCRIPT_URL

    // 添加加载错误处理
    script.onerror = () => {
      if (isDevelopment) {
        console.error("Umami Analytics: Script loading failed")
      }
    }

    document.head.appendChild(script)
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Umami Analytics: Initialization failed", error)
    }
  }
}

// 事件跟踪函数
export function event(eventName: string, eventData?: Record<string, any>) {
  if (!UMAMI_WEBSITE_ID)
    return

  try {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(eventName, eventData)
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Umami Analytics: Event tracking failed", error)
    }
  }
}

// 声明全局 window 对象上的类型
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void
    }
  }
}
