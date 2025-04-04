import type { Metadata, ResolvingMetadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Suspense } from "react"

import { CTA } from "@/components/block/cta"
import { Feature } from "@/components/block/feature"
import { Hero } from "@/components/block/hero"
import { Showcase } from "@/components/block/showcase"
import { defaultLocale } from "@/i18n/config/routing"
import type { Locale } from "@/i18n/types"
import { createMetadata } from "@/lib/metadata"

// 定义页面属性类型
interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// 生成静态参数
export function generateStaticParams() {
  // 默认语言（英文）不需要前缀，其他语言需要
  return [
    { locale: defaultLocale }, // 生成 /
    { locale: "zh" }, // 生成 /zh
  ]
}

// 生成主页元数据
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  return createMetadata({
    params,
    parent,
    pageName: "defaults",
    pathname: "/",
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // 使用类型断言确保类型安全
  setRequestLocale(locale as Locale)

  return (
    <main>
      {/* 优先渲染Hero部分，这是用户首先看到的内容，也是LCP的重要部分 */}
      <Hero />

      {/* 其他部分使用Suspense包装，允许Hero部分优先渲染 */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <Feature />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <Showcase />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-muted/20" />}>
        <CTA />
      </Suspense>
    </main>
  )
}
