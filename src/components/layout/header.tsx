"use client"

import { BookOpen, ChevronRight, FolderOpen, Menu, Users, X } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import AnnouncementBar from "@/components/client/announcement-bar"
import { LanguageSwitcher } from "@/components/client/language-switcher"
import { ThemeSwitcher } from "@/components/client/theme-switcher"
import { Link, usePathname, useRouter } from "@/i18n/config/navigation"

function Header() {
  const currentYear = new Date().getFullYear()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({
    works: null,
    follow: null,
    group: null,
  })
  const navContainerRef = useRef<HTMLDivElement | null>(null)

  const t = useTranslations("components")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // 处理锚点点击
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()

    // 检查是否在首页
    const isHomePage = pathname === "/" || pathname === "/zh"

    if (isHomePage) {
      // 如果在首页，添加锚点到URL并滚动
      const element = document.getElementById(anchor)
      if (element) {
        // 使用history API更新URL而不刷新页面
        const newUrl = `${window.location.pathname}#${anchor}`
        window.history.pushState({}, "", newUrl)

        // 滚动到元素
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
    else {
      // 如果不在首页，直接跳转到首页对应的锚点
      const locale = pathname.startsWith("/zh") ? "zh" : "en"
      const homeUrl = locale === "zh" ? `/zh#${anchor}` : `/#${anchor}`

      // 使用router跳转
      router.push(homeUrl)
      setIsMenuOpen(false)
    }
  }

  // 在组件加载时检查URL中是否有锚点
  useEffect(() => {
    // 如果URL中有hash（锚点），延迟滚动到对应位置
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1) // 去掉#号
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  // 使用useEffect来处理body的overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = ""
    }

    // 组件卸载时清理
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // 处理导航项的鼠标事件
  const handleNavItemMouseEnter = (itemId: string) => {
    setActiveNavItem(itemId)

    const navItem = navRefs.current[itemId]
    if (navItem && navContainerRef.current) {
      const navRect = navItem.getBoundingClientRect()
      const containerRect = navContainerRef.current.getBoundingClientRect()

      setIndicatorStyle({
        left: navRect.left - containerRect.left,
        width: navRect.width,
        opacity: 1,
      })
    }
  }

  const handleNavItemMouseLeave = () => {
    setActiveNavItem(null)
    setIndicatorStyle(prev => ({
      ...prev,
      opacity: 0,
    }))
  }

  // 导航项的共同样式
  const navItemBaseClass = "text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer py-2 px-3 rounded-md"

  return (
    <>
      <AnnouncementBar />
      <header className="w-full py-3 sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
          <div className="flex items-center justify-between h-10">
            {/* Logo and Navigation Group */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.svg"
                  alt={`${t("header.title")} Logo`}
                  width={32}
                  height={32}
                  className="text-primary"
                  priority={true}
                />
                <span className="text-lg font-medium">{t("header.title")}</span>
              </Link>

              {/* Desktop Navigation */}
              <div
                ref={navContainerRef}
                className="hidden md:block ml-8 relative"
                onMouseLeave={handleNavItemMouseLeave}
              >
                <nav className="flex items-center space-x-1" role="navigation" aria-label="主导航">
                  <a
                    href="#showcase"
                    ref={(el) => { navRefs.current.works = el }}
                    className={`${navItemBaseClass} ${activeNavItem === "works" ? "text-primary" : ""}`}
                    onMouseEnter={() => handleNavItemMouseEnter("works")}
                    onClick={e => handleAnchorClick(e, "showcase")}
                  >
                    {t("header.navigation.works")}
                  </a>
                  <a
                    href="#cta"
                    ref={(el) => { navRefs.current.follow = el }}
                    className={`${navItemBaseClass} ${activeNavItem === "follow" ? "text-primary" : ""}`}
                    onMouseEnter={() => handleNavItemMouseEnter("follow")}
                    onClick={e => handleAnchorClick(e, "cta")}
                  >
                    {t("header.navigation.follow")}
                  </a>
                  <Link
                    href="/group"
                    ref={(el) => { navRefs.current.group = el }}
                    className={`${navItemBaseClass} ${activeNavItem === "group" ? "text-primary" : ""}`}
                    onMouseEnter={() => handleNavItemMouseEnter("group")}
                  >
                    {t("header.navigation.group")}
                  </Link>

                  {/* 背景指示器 */}
                  <div
                    className="absolute bottom-0 h-[38px] bg-primary/10 rounded-md transition-all duration-300 ease-out pointer-events-none"
                    style={{
                      left: `${indicatorStyle.left}px`,
                      width: `${indicatorStyle.width}px`,
                      opacity: indicatorStyle.opacity,
                    }}
                  />
                </nav>
              </div>
            </div>

            {/* Theme and Language Controls - Desktop Only */}
            <div className="hidden md:flex items-center space-x-2" role="toolbar" aria-label="网站工具栏">
              <div className="flex items-center gap-1 p-1 bg-muted/50 hover:bg-muted/80 rounded-lg transition-colors duration-200">
                <LanguageSwitcher variant="full" side="bottom" inHeader={true} />
                <div className="w-px h-5 bg-border/50" />
                <ThemeSwitcher variant="icon" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center" role="toolbar" aria-label="移动端工具栏">
              <button
                type="button"
                onClick={toggleMenu}
                className="cursor-pointer p-2 hover:bg-accent rounded-md transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - 放在header外部 */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-[280px] bg-background/95 backdrop-blur-md border-l border-border z-[60] flex flex-col shadow-xl transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-border">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt={`${t("header.title")} Logo`}
              width={28}
              height={28}
              className="text-primary"
              priority={true}
            />
            <span id="mobile-menu-title" className="text-lg font-medium">{t("header.title")}</span>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 hover:bg-accent/80 rounded-full transition-colors duration-200"
            aria-label="关闭菜单"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Navigation Links */}
          <nav className="mb-4">
            <div className="space-y-0.5">
              <a
                href="#showcase"
                className="flex items-center justify-between py-4 px-5 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
                onClick={e => handleAnchorClick(e, "showcase")}
              >
                <div className="flex items-center">
                  <FolderOpen className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-primary" />
                  <span>{t("header.navigation.works")}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#cta"
                className="flex items-center justify-between py-4 px-5 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
                onClick={e => handleAnchorClick(e, "cta")}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-primary" />
                  <span>{t("header.navigation.follow")}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <Link
                href="/group"
                className="flex items-center justify-between py-4 px-5 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-primary" />
                  <span>{t("header.navigation.group")}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Sidebar Footer - 包含主题切换和语言切换 */}
        <div className="border-t border-border p-5">
          <div className="grid grid-cols-2 gap-3">
            {/* 语言切换 */}
            <div className="col-span-1">
              <div className="flex justify-center py-2.5 px-2 bg-muted/40 rounded-md hover:bg-muted/80 transition-colors h-full">
                <LanguageSwitcher variant="full" side="top" />
              </div>
            </div>

            {/* 主题切换 */}
            <div className="col-span-1">
              <div className="flex justify-center py-2.5 px-2 bg-muted/40 rounded-md hover:bg-muted/80 transition-colors h-full">
                <ThemeSwitcher variant="full" />
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center mt-6">
            ©
            {" "}
            {currentYear}
            {" "}
            {t("header.title")}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
