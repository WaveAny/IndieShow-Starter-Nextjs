import type { Metadata, ResolvingMetadata } from "next"

import { MarkdownPage } from "@/components/markdown/markdown-page"
import { createMetadata } from "@/lib/metadata"

// 定义页面属性类型
interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// 生成元数据
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  return createMetadata({
    params,
    parent,
    pageName: "terms",
    pathname: "/terms",
  })
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  return <MarkdownPage pageName="terms" locale={locale} />
}

export const dynamic = "force-dynamic"
