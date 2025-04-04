"use client"

import { ArrowRight, CheckCircle, Clock, QrCode, X } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { platformIcons, projectCategories, projects } from "@/lib/data/projects"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function Showcase() {
  const t = useTranslations("components")
  const [currentCategory, setCurrentCategory] = useState("all")
  const [isChangingCategory, setIsChangingCategory] = useState(false)
  const [qrCodeDialog, setQrCodeDialog] = useState<{
    isOpen: boolean
    title: string
    qrCode: string
  }>({
    isOpen: false,
    title: "",
    qrCode: "",
  })

  // 过滤项目列表
  const filteredProjects = currentCategory === "all"
    ? projects
    : projects.filter(project => project.type === currentCategory)

  // 切换分类
  const changeCategory = async (type: string) => {
    if (currentCategory === type || isChangingCategory)
      return

    setIsChangingCategory(true)
    setCurrentCategory(type)

    // 添加延迟以实现平滑过渡
    await new Promise(resolve => setTimeout(resolve, 300))
    setIsChangingCategory(false)
  }

  return (
    <section id="showcase" className="relative overflow-hidden bg-background py-16 sm:py-20">
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
        {/* 标题区域 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-6">
            {t("showcase.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12">
            {t("showcase.description")}
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex justify-center gap-4 mb-12">
          {projectCategories.map(category => (
            <Button
              key={category.key}
              variant="ghost"
              size="lg"
              className={cn(
                "rounded-full hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer",
                category.type === currentCategory && "bg-primary/10 text-primary",
              )}
              onClick={() => changeCategory(category.type)}
              disabled={isChangingCategory}
            >
              {t(`showcase.categories.${category.key}` as any)}
              {category.type === currentCategory && (
                <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 animate-ripple" />
              )}
            </Button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Logo和标题区 */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src={project.image}
                      alt={t(`showcase.projects.${project.id}.title` as any)}
                      fill
                      sizes="(max-width: 768px) 56px, 56px"
                      className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 truncate">
                        {t(`showcase.projects.${project.id}.title` as any)}
                      </h3>
                      <span className={cn(
                        "shrink-0 inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full",
                        project.isOnline
                          ? "bg-green-500/10 text-green-500"
                          : "bg-amber-500/10 text-amber-500",
                      )}
                      >
                        {project.isOnline
                          ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-0.5" />
                                {" "}
                                {t("showcase.status.online")}
                              </>
                            )
                          : (
                              <>
                                <Clock className="h-3 w-3 mr-0.5" />
                                {" "}
                                {t("showcase.status.developing")}
                              </>
                            )}
                      </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      {t(`showcase.projects.${project.id}.description` as any)}
                    </p>
                  </div>
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium bg-primary/5",
                        tag.color,
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* 分隔线和底部操作区容器 */}
                <div className="mt-auto pt-6">
                  <div className="h-px bg-border/50 mb-6" />

                  {/* 底部操作区 */}
                  <div className="flex items-center justify-between">
                    {/* 平台图标 */}
                    <div className="flex gap-3">
                      {project.platforms.map((platform, index) => {
                        const Icon = platformIcons[platform.icon]
                        return (
                          <div
                            key={index}
                            className="group/icon relative"
                          >
                            <span
                              className="cursor-pointer inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {Icon && <Icon className="h-4 w-4" />}
                            </span>
                            {/* 悬浮提示 */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-foreground/90 rounded-md opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
                              {t(`showcase.platforms.${platform.icon}` as any)}
                              <svg className="absolute text-foreground/90 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center gap-3">
                      <Link href={project.demo} target="_blank" className="group cursor-pointer">
                        <Button variant="ghost" size="sm" className="cursor-pointer">
                          <span className="flex items-center gap-1.5">
                            {t("showcase.viewDetails")}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        </Button>
                      </Link>
                      {project.qrCode && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group cursor-pointer"
                          title={t("showcase.scanQR")}
                          onClick={() => setQrCodeDialog({
                            isOpen: true,
                            title: t(`showcase.projects.${project.id}.title` as any),
                            qrCode: project.qrCode || "",
                          })}
                        >
                          <QrCode className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 二维码弹窗 */}
      <Dialog
        open={qrCodeDialog.isOpen}
        onOpenChange={isOpen =>
          setQrCodeDialog(prev => ({ ...prev, isOpen }))}
      >
        <DialogContent className="sm:max-w-[360px]" aria-describedby="qr-dialog-description">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-medium text-primary">
              {qrCodeDialog.title}
            </DialogTitle>
            <DialogDescription id="qr-dialog-description" className="text-center text-sm text-muted-foreground">
              {t("showcase.scanQRDescription")}
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">{t("showcase.close")}</span>
          </DialogClose>
          <div className="relative mx-auto w-48 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-2">
            <Image
              src={qrCodeDialog.qrCode}
              alt={t("showcase.scanQRDescription")}
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-contain p-2"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {t("showcase.scanQRTip")}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  )
}
