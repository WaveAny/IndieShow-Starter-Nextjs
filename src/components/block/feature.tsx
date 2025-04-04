import { Headphones, Rocket, Server, Smartphone, Globe, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

// 图标映射
const iconMap = {
  rapidIteration: <Rocket className="h-7 w-7" />,
  performanceOptimization: <Zap className="h-7 w-7" />,
  easyDeployment: <Server className="h-7 w-7" />,
  responsiveDesign: <Smartphone className="h-7 w-7" />,
  globalSupport: <Globe className="h-7 w-7" />,
  technicalSupport: <Headphones className="h-7 w-7" />,
}

// 颜色映射
const colorMap = {
  rapidIteration: "#10B981", // Emerald-500
  performanceOptimization: "#F59E0B", // Amber-500
  easyDeployment: "#6366F1", // Indigo-500
  responsiveDesign: "#8B5CF6", // Violet-500
  globalSupport: "#3B82F6", // Blue-500
  technicalSupport: "#EC4899", // Pink-500
}

// 技术栈图标映射 - 改为使用SVG图片
const techIconMap = {
  nextjs: <Image src="/icons/nextjs.svg" alt="Next.js" width={32} height={32} className="h-8 w-8" />,
  react: <Image src="/icons/react.svg" alt="React" width={32} height={32} className="h-8 w-8" />,
  typescript: <Image src="/icons/typescript.svg" alt="TypeScript" width={32} height={32} className="h-8 w-8" />,
  tailwind: <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={32} height={32} className="h-8 w-8" />,
  vercel: <Image src="/icons/vercel.svg" alt="Vercel" width={32} height={32} className="h-8 w-8" />,
}

// 技术栈颜色映射
const techColorMap = {
  nextjs: {
    color: "#000000",
    bgColor: "rgba(0, 0, 0, 0.05)",
    darkBgColor: "rgba(255, 255, 255, 0.05)",
  },
  react: {
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.05)",
    darkBgColor: "rgba(97, 218, 251, 0.05)",
  },
  typescript: {
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.05)",
    darkBgColor: "rgba(49, 120, 198, 0.05)",
  },
  tailwind: {
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.05)",
    darkBgColor: "rgba(6, 182, 212, 0.05)",
  },
  vercel: {
    color: "#000000",
    bgColor: "rgba(0, 0, 0, 0.05)",
    darkBgColor: "rgba(255, 255, 255, 0.05)",
  },
}

export function Feature() {
  const t = useTranslations("components")

  // 特性列表
  const features = [
    "rapidIteration",
    "performanceOptimization",
    "easyDeployment",
    "responsiveDesign",
    "globalSupport",
    "technicalSupport",
  ].map((key, index) => ({
    key,
    icon: iconMap[key as keyof typeof iconMap],
    title: t(`feature.features.${key}.title` as any),
    description: t(`feature.features.${key}.description` as any),
    color: colorMap[key as keyof typeof colorMap],
    delay: index * 100,
  }))

  // 技术栈列表
  const technologies = [
    "nextjs",
    "react",
    "typescript",
    "tailwind",
    "vercel",
  ].map((key, index) => ({
    key,
    name: t(`feature.technologies.${key}.name` as any),
    icon: techIconMap[key as keyof typeof techIconMap],
    ...techColorMap[key as keyof typeof techColorMap],
    delay: index * 100,
  }))

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background via-muted/50 to-background">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      {/* 顶部渐变过渡 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent" />

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/95 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
        {/* 标题部分 - 改为左右布局 */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-6 lg:gap-16 mb-8 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-muted-foreground !leading-tight">
            <span className="inline lg:inline-block">{t("feature.title.part1")}</span>
            <span className="relative inline lg:block text-primary lg:mt-2 ml-2 lg:ml-0">
              {t("feature.title.part2")}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-[180px] lg:w-[360px] fill-primary/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("feature.description")}
          </p>
        </div>

        {/* 特性列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map(feature => (
            <div
              key={feature.key}
              className="group relative p-6 rounded-2xl transition-all duration-500 hover:bg-background/50 backdrop-blur-sm transform-gpu hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-border/50"
              style={{ "--feature-color": feature.color } as React.CSSProperties}
            >
              {/* 内容 */}
              <div className="relative z-10 flex items-start gap-4">
                {/* 图标 */}
                <div
                  className="rounded-xl p-3 w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-2 text-foreground/90 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 技术栈展示 */}
        <div className="relative tech-stack-section">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("feature.technologyStack")}
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-border" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {t("feature.poweredBy")}
              </span>
              <div className="w-12 h-px bg-border" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {technologies.map(tech => (
              <div
                key={tech.key}
                className="group relative p-6 rounded-xl transition-all duration-300 hover:bg-muted/50"
              >
                <div className="flex flex-col items-center">
                  {/* 图标 */}
                  <div
                    className="mb-4 rounded-xl p-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                    }}
                  >
                    {tech.icon}
                  </div>

                  {/* 技术名称 */}
                  <span className="font-medium text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>

                  {/* 底部装饰线 */}
                  <div
                    className="mt-2.5 w-6 h-0.5 rounded-full transition-all duration-300 group-hover:w-10"
                    style={{ backgroundColor: `${tech.color}50` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
