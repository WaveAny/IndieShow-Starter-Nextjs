"use client"

import { ArrowUp } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations("components")

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      }
      else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        // 基础样式 - 增大点击区域，优化位置
        "fixed bottom-8 right-8 z-50",
        "h-10 w-10 sm:h-11 sm:w-11",
        "flex items-center justify-center",
        "rounded-xl",

        // 背景和边框 - 使用主题颜色
        "bg-background/60",
        "ring-1 ring-border",
        "backdrop-blur-md",

        // 阴影效果 - 适配主题
        "shadow-lg shadow-primary/10",

        // 动画过渡
        "transition-all duration-300 ease-out",

        // 悬浮和激活状态
        "hover:bg-primary/10 active:bg-primary/20",
        "hover:ring-primary hover:ring-offset-2 hover:ring-offset-background",
        "hover:scale-105 active:scale-95",
        "hover:shadow-xl hover:shadow-primary/20",

        // 显示/隐藏动画
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",

        // 组样式
        "group",
      )}
      aria-label={t("scroll.backToTop")}
    >
      <ArrowUp
        className={cn(
          "h-4 w-4 sm:h-5 sm:w-5",
          "text-muted-foreground group-hover:text-primary",
          "transition-all duration-300",
          "group-hover:scale-110 group-active:scale-90",
          "stroke-[2.5px]",
        )}
      />
    </button>
  )
}
