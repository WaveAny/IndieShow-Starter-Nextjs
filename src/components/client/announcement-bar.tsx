"use client"

import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Banner } from "@/components/ui/banner"

export default function AnnouncementBar() {
  const t = useTranslations("components")

  return (
    <Link
      href="https://github.com/waveany"
      target="_blank"
      rel="noopener noreferrer"
      className="block group transition-colors hover:bg-primary/[0.15] dark:hover:bg-primary/25"
    >
      <Banner variant="default" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 min-h-[28px] flex items-center justify-center border-b border-primary/10 dark:border-primary/20">
        <div className="inline-flex items-center gap-1.5">
          <span className="text-primary dark:text-primary/90 text-sm leading-none">✨</span>
          <span className="text-sm font-medium leading-none group-hover:text-primary/90 dark:group-hover:text-primary transition-colors">
            {t("announcement.message")}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-primary/80 dark:text-primary/70 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </Banner>
    </Link>
  )
}
