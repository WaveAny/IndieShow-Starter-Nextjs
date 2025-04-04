"use client"

import { ChevronDown, Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { createNavigation } from "next-intl/navigation"
import * as React from "react"

import type { Locale } from "@/i18n/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { locales, routing } from "@/i18n/config/routing"
import { cn } from "@/lib/utils"

// 创建国际化导航
const { useRouter, usePathname } = createNavigation(routing)

export interface LanguageSwitcherProps {
  variant?: "icon" | "full"
  side?: "top" | "right" | "bottom" | "left"
  inHeader?: boolean
}

export function LanguageSwitcher({ variant = "icon", side = "bottom", inHeader = false }: LanguageSwitcherProps) {
  const locale = useLocale()
  const t = useTranslations("messages")
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [menuSide, setMenuSide] = React.useState<"top" | "right" | "bottom" | "left">(side)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  // 在组件挂载和窗口大小变化时检测位置
  React.useEffect(() => {
    const checkPosition = () => {
      if (!triggerRef.current)
        return

      const rect = triggerRef.current.getBoundingClientRect()
      const bottomSpace = window.innerHeight - rect.bottom
      const topSpace = rect.top

      // 如果底部空间不足且顶部空间足够，则向上展开
      if (bottomSpace < 200 && topSpace > 200) {
        setMenuSide("top")
      }
      else {
        setMenuSide("bottom")
      }
    }

    checkPosition()
    window.addEventListener("resize", checkPosition)
    return () => window.removeEventListener("resize", checkPosition)
  }, [])

  // 切换语言
  const switchLanguage = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          ref={triggerRef}
          className={cn(
            "flex items-center rounded-md transition-colors md:cursor-pointer relative group",
            variant === "icon"
              ? "h-9 w-9 justify-center hover:bg-accent/80"
              : "h-9 px-3 hover:bg-accent/80 text-sm font-medium",
            open && "bg-accent/80",
          )}
          aria-label={`切换语言，当前语言：${t(`common.language.${locale}`)}`}
          aria-expanded={open}
          aria-haspopup="true"
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            <Globe className="size-[18px] group-hover:scale-105 transition-transform duration-200" strokeWidth={1.5} />
          </div>
          {variant === "full" && (
            <>
              <span className="min-w-13 text-center">{t(`common.language.${locale}`)}</span>
              <ChevronDown className={cn(
                "ml-1 h-4 w-4 shrink-0 transition-transform duration-200",
                open && "rotate-180",
              )}
              />
            </>
          )}
          {/* 添加涟漪效果 */}
          <span className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        side={menuSide}
        className={cn(
          "w-[120px] border border-border shadow-md bg-background/95 backdrop-blur-lg z-[300] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          inHeader && "mt-3",
        )}
        sideOffset={inHeader ? 4 : 8}
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={20}
        forceMount
      >
        <div className="py-1">
          {locales.map((l: Locale) => (
            <DropdownMenuItem
              key={l}
              onClick={() => switchLanguage(l)}
              className={cn(
                "flex items-center gap-2 cursor-pointer py-2 text-sm text-foreground/90 hover:text-foreground transition-colors relative group",
                l === locale && "font-medium bg-accent/50",
              )}
              role="menuitem"
              aria-current={l === locale ? "true" : "false"}
            >
              {l === locale && (
                <span className="absolute left-2 flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
              )}
              <span className="ml-6 group-hover:translate-x-0.5 transition-transform duration-200">{t(`common.language.${l}`)}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
