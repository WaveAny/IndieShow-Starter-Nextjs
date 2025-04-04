import type { Metadata, ResolvingMetadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { Inter, Roboto_Mono } from "next/font/google"
import { notFound } from "next/navigation"

import type { Locale } from "@/i18n/types"
import { AnalyticsProvider } from "@/components/providers/analytics-provider"
import ScrollToTop from "@/components/client/scroll-to-top"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { routing } from "@/i18n/config/routing"
import { createMetadata } from "@/lib/metadata"
import "@/styles/globals.css"

// 优化字体加载策略，使用更高性能的字体配置
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap", // 快速显示文本，减少CLS和LCP时间
  preload: true, // 预加载字体
  fallback: ["system-ui", "Arial", "sans-serif"], // 提供备选字体
  adjustFontFallback: true, // 调整字体回退系统
})

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
  adjustFontFallback: true,
})

// 定义页面属性类型
interface Props {
  params: Promise<{ locale: string }>
}

// 生成元数据
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  return createMetadata({
    params,
    parent,
    pageName: "defaults",
    pathname: "/",
  })
}

// 视口配置
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

// 为所有支持的语言生成静态路由
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // 验证 locale 并启用静态渲染
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // 使用类型断言确保类型安全
  setRequestLocale(locale as Locale)

  // NextIntlClientProvider 现在会自动继承服务器端的 messages
  // 不再需要显式获取和传递 messages
  await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* 添加预连接资源以加快资源加载 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 预加载主要资源 */}
        <link rel="preload" href="/logo.svg" as="image" />
      </head>
      <body className={`${inter.className} ${robotoMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {/* 在 next-intl 4 中，messages 会自动从服务器端继承，不必再手动传递 */}
          <NextIntlClientProvider locale={locale as Locale}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
