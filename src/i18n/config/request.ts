import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"

import { defaultLocale, locales } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  // 获取请求的语言
  const requested = await requestLocale

  // 使用 hasLocale 助手函数验证语言，增强类型安全
  const locale = hasLocale(locales, requested)
    ? requested
    : defaultLocale

  // 返回配置，显式包含 locale
  return {
    locale,
    messages: {
      components: (await import(`../locales/components/${locale}.json`)).default,
      messages: (await import(`../locales/messages/${locale}.json`)).default,
      pages: (await import(`../locales/pages/${locale}.json`)).default,
    },
  }
})
