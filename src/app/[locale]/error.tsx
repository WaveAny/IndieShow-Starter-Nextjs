"use client"

import { ArrowRight, Home, RefreshCcw } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const locale = useLocale()
  const t = useTranslations("messages")
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 md:py-32 px-4 md:px-8 animate-fade-in">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />

      {/* 网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] -z-10" />

      {/* 动态渐变光晕 */}
      <div className="absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] md:h-[400px] md:w-[600px] rounded-full bg-gradient-to-l from-primary/30 to-blue-500/30 opacity-20 blur-[120px] animate-pulse delay-1000" />

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/95 to-transparent" />

      <div className="container mx-auto @container">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* 状态标签 */}
          <div className="feature-badge">
            <span>500</span>
            <span className="inline-block w-1 h-1 rounded-full bg-primary" />
            <span>{t("error.status")}</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl @md:text-5xl @lg:text-6xl font-bold tracking-tight">
            {t("error.title")}
            {" "}
            <span className="gradient-heading">{t("error.subtitle")}</span>
          </h1>

          {/* 说明文字 */}
          <p className="text-foreground/70 text-lg @md:text-xl max-w-xl text-pretty">
            {t("error.description")}
          </p>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => reset()}
              className="group"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              {t("error.retry")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push(`/${locale === "en" ? "" : locale}`)}
            >
              <Home className="mr-2 h-4 w-4" />
              {t("error.home")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
