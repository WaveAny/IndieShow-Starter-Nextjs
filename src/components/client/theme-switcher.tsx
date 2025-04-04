"use client"

import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { cn } from "@/lib/utils"

export interface ThemeSwitcherProps {
  variant?: "icon" | "full"
}

export function ThemeSwitcher({ variant = "icon" }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  // 确保组件在客户端渲染
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // 切换主题函数
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // 避免服务端渲染闪烁
  if (!isMounted) {
    return (
      <button
        className={cn(
          "relative flex items-center rounded-md transition-colors md:cursor-pointer",
          variant === "icon"
            ? "h-9 w-9 justify-center hover:bg-accent/80"
            : "h-9 px-3 hover:bg-accent/80 text-sm font-medium",
        )}
        aria-label="加载中..."
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          <div className="h-[18px] w-[18px] rounded-full bg-muted animate-pulse" />
        </div>
        {variant === "full" && (
          <div className="ml-2 h-4 w-16 bg-muted rounded animate-pulse" />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center rounded-md transition-colors md:cursor-pointer group",
        variant === "icon"
          ? "h-9 w-9 justify-center hover:bg-accent/80"
          : "h-9 px-3 hover:bg-accent/80 text-sm font-medium",
      )}
      aria-label={`切换主题，当前主题：${theme === "dark" ? "深色" : "浅色"}`}
      aria-pressed={theme === "dark"}
    >
      <div className="relative flex items-center justify-center w-5 h-5 group-hover:scale-105 transition-transform duration-200">
        <Sun className="size-[18px] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" strokeWidth={1.5} />
        <MoonStar className="absolute size-[18px] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" strokeWidth={1.5} />
      </div>
      {variant === "full" && (
        <span className="ml-2 min-w-16 text-center group-hover:translate-x-0.5 transition-transform duration-200">
          {theme === "dark" ? "深色" : "浅色"}
        </span>
      )}
      {/* 添加涟漪效果 */}
      <span className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </button>
  )
}
