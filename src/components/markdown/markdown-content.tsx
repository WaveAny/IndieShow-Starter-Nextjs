import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  /**
   * Markdown 文本内容
   */
  content: string
  /**
   * 可选的额外样式类名
   */
  className?: string
}

const components: Components = {
  // 标题样式
  h1: ({ children }) => (
    <h1 className="text-[44px] font-bold tracking-tight text-foreground mb-12">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-[32px] font-bold tracking-tight text-foreground mt-16 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-[24px] font-medium text-foreground/90 mt-12 mb-4">
      {children}
    </h3>
  ),
  // 段落样式
  p: ({ children }) => (
    <p className="text-[17px] leading-[1.9] text-foreground mb-6">
      {children}
    </p>
  ),
  // 列表样式
  ul: ({ children }) => (
    <ul className="text-[17px] leading-[1.9] text-foreground space-y-4 my-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-[17px] leading-[1.9] text-foreground space-y-4 my-6 list-decimal pl-5">
      {children}
    </ol>
  ),
  // 列表项样式
  li: ({ children }) => {
    return (
      <li className="relative pl-6">
        <span className="absolute left-0 top-[0.85em] h-1.5 w-1.5 rounded-full bg-foreground/30" />
        {children}
      </li>
    )
  },
  // 链接样式
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-primary underline hover:text-primary/80 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  // 分隔线样式
  hr: () => (
    <div className="my-8">
      <div className="h-px bg-border/90" />
    </div>
  ),
  // 强调样式
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">
      {children}
    </strong>
  ),
}

/**
 * Markdown 内容渲染组件
 * 使用 Tailwind Typography 插件提供的 prose 类来美化 Markdown 内容
 *
 * @example
 * ```tsx
 * // 基础用法
 * <MarkdownContent content={content} />
 *
 * // 自定义样式
 * <MarkdownContent content={content} className="prose-lg" />
 * ```
 */
export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("space-y-8 max-w-[900px]", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
