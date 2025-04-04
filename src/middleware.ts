import createMiddleware from "next-intl/middleware"

import { defaultLocale, locales } from "./i18n/config/routing"

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
})

// 更新 matcher 格式，使用官方推荐的格式
export const config = {
  matcher: [
    // 匹配所有路由，但排除 API 路由、静态文件等
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
