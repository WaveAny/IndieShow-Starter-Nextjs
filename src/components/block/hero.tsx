import { ArrowRight, ChevronRight, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"

export function Hero() {
  const t = useTranslations("components")

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* 顶部提示按钮 */}
          <div className="mb-8 inline-flex">
            <Link href="https://github.com/WaveAny/IndieShow-Starter-Nextjs" target="_blank">
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5  transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                🎁
                {" "}
                <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <AnimatedGradientText className="text-sm font-medium">
                  {t("hero.tips")}
                </AnimatedGradientText>
                <ChevronRight
                  className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          </div>

          {/* 主标题 */}
          <div className="relative">
            <h1 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">{t("hero.subTitleStart")}</span>
              <span className="relative mx-3 whitespace-nowrap text-primary">
                {t("hero.subTitleHighlight")}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
              </span>
              <br className="hidden sm:block" />
              <span
                className="text-foreground mt-4 inline-block"
                style={{ contentVisibility: "auto" }}
                id="main-hero-text"
              >
                {t("hero.subTitleEnd")}
              </span>
            </h1>
          </div>

          {/* 主要描述 */}
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            {t("hero.description")}
          </p>

          {/* 副标语 */}
          <p className="mt-6 text-base text-muted-foreground">
            {t("hero.slogan")}
          </p>

          {/* 行动按钮 */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 px-8 sm:flex-row sm:gap-8 sm:px-0">
            {/* 立即部署按钮 */}
            <Link href="https://github.com/WaveAny/IndieShow-Starter-Nextjs" target="_blank" className="w-[85%] max-w-[280px] sm:w-auto">
              <GradientButton
                rightIcon={<Github className="h-5 w-5" />}
              >
                {t("hero.buttons.deploy")}
              </GradientButton>
            </Link>

            {/* 我的作品按钮 */}
            <Link href="#showcase" className="w-[85%] max-w-[280px] sm:w-auto">
              <GradientButton
                variant="outline"
                rightIcon={<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
              >
                {t("hero.buttons.works")}
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
