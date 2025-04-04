/**
 * Google Analytics 配置和工具函数
 *
 * 这个文件包含 Google Analytics 的配置信息和相关工具函数，
 * 用于在应用程序中跟踪页面访问和事件。
 */

// Google Analytics 的跟踪 ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// 环境变量
const isDevelopment = process.env.NODE_ENV === "development"

// 初始化 Google Analytics
export function initGoogleAnalytics() {
  if (!GA_TRACKING_ID) {
    if (isDevelopment) {
      console.warn("Google Analytics: ID not set")
    }
    return
  }

  try {
    // 创建 gtag 函数
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    // 加载 Google Analytics 脚本
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`

    // 添加加载错误处理
    script.onerror = () => {
      if (isDevelopment) {
        console.error("Google Analytics: Script loading failed")
      }
    }

    document.head.appendChild(script)

    // 初始化 Google Analytics
    window.gtag("js", new Date().toISOString())
    window.gtag("config", GA_TRACKING_ID, {
      send_page_view: true,
    })
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Google Analytics: Initialization failed", error)
    }
  }
}

// 页面浏览跟踪函数
export function pageview(url: string) {
  if (!GA_TRACKING_ID)
    return

  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
        page_title: document.title,
      })
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Google Analytics: Page tracking failed", error)
    }
  }
}

// 事件跟踪函数
export function event({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (!GA_TRACKING_ID)
    return

  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
      })
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("Google Analytics: Event tracking failed", error)
    }
  }
}

// 声明全局 window 对象上的类型
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (
      command: string,
      target: string,
      config?: Record<string, any> | string
    ) => void
  }
}
