import { defineRouting } from "next-intl/routing"

import type { Locale } from "../types"

// 导出支持的语言列表
export const locales: Locale[] = ["en", "zh"]

// 默认语言
export const defaultLocale = "en" as const

// 定义路由配置
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  // 添加 localeCookie 配置，符合 GDPR 规范
  // 默认为 session cookie，浏览器关闭时过期
  // 如需设置更长的过期时间，可以取消注释下面的配置
  // localeCookie: {
  //   maxAge: 60 * 60 * 24 * 30 // 30天
  // }
})
