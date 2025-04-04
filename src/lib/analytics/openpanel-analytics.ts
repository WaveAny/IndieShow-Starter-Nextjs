/**
 * OpenPanel 配置和工具函数
 *
 * 这个文件包含 OpenPanel 的配置信息，
 * 用于在应用程序中跟踪用户行为和统计数据。
 */

// OpenPanel 的客户端 ID
export const OP_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

// OpenPanel 的脚本地址
export const OP_SCRIPT_URL = "https://openpanel.dev/op1.js"

// 环境变量
const isDevelopment = process.env.NODE_ENV === "development"

// 初始化 OpenPanel 统计
export function initOpenPanelAnalytics() {
  if (!OP_CLIENT_ID) {
    if (isDevelopment) {
      console.warn("OpenPanel Analytics: Client ID not set")
    }
    return
  }

  try {
    const script = document.createElement("script")
    script.async = true
    script.defer = true
    script.setAttribute("data-client-id", OP_CLIENT_ID)
    script.src = OP_SCRIPT_URL

    // 添加加载错误处理
    script.onerror = () => {
      if (isDevelopment) {
        console.error("OpenPanel Analytics: Script loading failed")
      }
    }

    document.head.appendChild(script)
  }
  catch (error) {
    if (isDevelopment) {
      console.error("OpenPanel Analytics: Initialization failed", error)
    }
  }
}

// 事件跟踪函数
export function event(eventName: string, eventData?: Record<string, any>) {
  if (!OP_CLIENT_ID)
    return

  try {
    if (typeof window !== "undefined" && window.op) {
      window.op.event(eventName, eventData)
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("OpenPanel Analytics: Event tracking failed", error)
    }
  }
}

// 用户识别函数
export function identify(userId: string, traits?: Record<string, any>) {
  if (!OP_CLIENT_ID)
    return

  try {
    if (typeof window !== "undefined" && window.op) {
      window.op.identify(userId, traits)
    }
  }
  catch (error) {
    if (isDevelopment) {
      console.error("OpenPanel Analytics: User identification failed", error)
    }
  }
}

// 声明全局 window 对象上的类型
declare global {
  interface Window {
    op?: {
      event: (eventName: string, eventData?: Record<string, any>) => void
      identify: (userId: string, traits?: Record<string, any>) => void
    }
  }
}
