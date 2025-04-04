import type { Metadata, ResolvingMetadata } from "next"
import { Gift, Heart, MessageCircle, Scan, Shield, Sparkles, Users, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

import { createMetadata } from "@/lib/metadata"
import { Card } from "@/components/ui/card"

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  return createMetadata({
    params,
    parent,
    pageName: "group",
    pathname: "/group",
  })
}

export default function GroupPage() {
  const t = useTranslations("pages")

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center py-12 sm:py-20 relative overflow-hidden">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 -z-10">
        {/* 高级网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        {/* 动态渐变光晕 */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] md:h-[400px] md:w-[600px] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 h-[300px] w-[400px] md:h-[400px] md:w-[600px] rounded-full bg-gradient-to-l from-primary/30 to-blue-500/30 opacity-20 blur-[120px] animate-pulse delay-1000" />
        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/95 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-16 items-start pb-8 sm:pb-16">
          {/* 左侧内容区域 */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-24">
            {/* 顶部图标组 */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-2.5 sm:p-3 ring-1 ring-primary/25 rotate-[-6deg] hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:animate-wiggle" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-2.5 sm:p-3 ring-1 ring-primary/25 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:animate-wiggle" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-2.5 sm:p-3 ring-1 ring-primary/25 rotate-[6deg] hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:animate-wiggle" />
              </div>
            </div>

            {/* 标题和描述 */}
            <div className="relative group mb-4 sm:mb-6 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent xl:text-6xl/none inline-block">
                {t("group.title")}
                <span className="absolute -top-1 -right-5 sm:-right-6 md:-right-8 group-hover:scale-125 transition-transform duration-300">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
                </span>
              </h1>
            </div>

            {/* 描述文本区域 */}
            <div className="space-y-3 sm:space-y-4 relative mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl lg:pr-4 leading-relaxed">
                {t("group.description")}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-2xl lg:pr-4 leading-relaxed">
                {t("group.communication")}
              </p>
            </div>

            {/* 社群数据 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-2xl mb-6 sm:mb-8">
              {[
                {
                  value: t("group.benefits.vip.title"),
                  label: t("group.benefits.vip.desc"),
                  icon: Gift,
                },
                {
                  value: t("group.benefits.support.title"),
                  label: t("group.benefits.support.desc"),
                  icon: Shield,
                },
                {
                  value: t("group.benefits.discount.title"),
                  label: t("group.benefits.discount.desc"),
                  icon: Zap,
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative flex flex-col items-center p-2 sm:p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <span className="text-xl sm:text-2xl mb-1.5 sm:mb-2 p-1.5 sm:p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {React.createElement(item.icon, {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:animate-pulse",
                      })}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {item.value}
                    </span>
                    <span className="text-[0.65rem] sm:text-xs text-muted-foreground/90 group-hover:text-primary/80 transition-colors duration-300 mt-0.5 line-clamp-2 text-center">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 加入提示文案 */}
            <div className="w-full">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-300 group cursor-pointer">
                  <span className="animate-pulse shrink-0">⭐️</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap text-sm sm:text-base lg:text-lg">{t("group.join_prompt")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧二维码区域 */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end lg:sticky lg:top-24">
            <div className="w-[280px] sm:w-[320px] md:w-[360px]">
              <Card className="relative overflow-visible rounded-2xl border bg-gradient-to-br from-card to-card/95 p-4 sm:p-5 md:p-7 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative flex flex-col items-center">
                  {/* 二维码容器 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-white p-3 sm:p-4 md:p-5 ring-1 ring-black/5 group-hover:ring-primary/30 transition-all duration-500 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/group-discord.png"
                        alt={t("group.qr_code_alt")}
                        className="object-contain"
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                        priority
                      />
                    </div>
                  </div>

                  {/* 扫码提示 */}
                  <div className="mt-5 sm:mt-6 md:mt-8">
                    <div className="relative group/btn inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full hover:from-primary/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
                      <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="text-sm sm:text-base font-medium text-primary relative">
                        {t("group.scan_button")}
                      </span>
                      <Scan className="h-4 w-4 sm:h-5 sm:w-5 text-primary relative group-hover/btn:animate-pulse" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 免责声明 */}
            <p className="mt-4 sm:mt-6 text-xs text-muted-foreground/70 italic w-[280px] sm:w-[320px] md:w-[360px] text-center leading-relaxed">
              {t("group.disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
