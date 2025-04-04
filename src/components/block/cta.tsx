import { MessageSquare } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { GradientButton } from "@/components/ui/gradient-button"

export function CTA() {
  const t = useTranslations("components")

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        {/* 高级网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        {/* 顶部渐变过渡 */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent" />
        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-background via-background/95 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* 标题 */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-6">
            {t("cta.title")}
          </h2>

          {/* 描述 */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12">
            {t("cta.description")}
          </p>

          {/* Discord 按钮 */}
          <div className="flex justify-center">
            <Link href="https://discord.gg/yajD5sJN" target="_blank" rel="noopener noreferrer" className="w-[85%] max-w-[280px] sm:w-auto">
              <GradientButton
                leftIcon={<MessageSquare className="h-5 w-5" />}
              >
                {t("cta.button")}
              </GradientButton>
            </Link>
          </div>

          {/* 社交媒体图标 */}
          <div className="mt-20 flex items-center justify-center gap-8">
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/blogger.svg"
                alt="Blog"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/x.svg"
                alt="x(Twitter)"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
            <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
                className="dark:invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
