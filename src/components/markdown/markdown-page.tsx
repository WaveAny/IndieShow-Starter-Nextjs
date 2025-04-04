import { notFound } from "next/navigation"

import { MarkdownContent } from "./markdown-content"

import { getMarkdownContent } from "@/lib/markdown"

interface MarkdownPageProps {
  /**
   * Markdown 文件名（不含扩展名）
   * 例如：privacy, terms, sales, about, faq 等
   */
  pageName: string
  /**
   * 语言代码
   * 例如：en, zh
   */
  locale: string
}

/**
 * 通用的 Markdown 页面渲染组件
 * 用于渲染任何基于 Markdown 的页面内容
 */
export async function MarkdownPage({ pageName, locale }: MarkdownPageProps) {
  try {
    const { content, metadata } = await getMarkdownContent(pageName, locale)

    return (
      <div className="space-y-8">
        <h1 className="text-[36px] font-bold tracking-tight text-foreground">
          {metadata.title}
        </h1>
        <MarkdownContent content={content} />
      </div>
    )
  }
  catch {
    notFound()
  }
}
