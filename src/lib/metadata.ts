import type { Metadata, ResolvingMetadata } from "next"
import { getTranslations } from "next-intl/server"

// 定义元数据属性类型
interface MetadataProps {
  params: { locale: string } // 这里不需要是 Promise，因为在调用时已经解析
  parent?: ResolvingMetadata
  pageName: string // 页面标识符
  pathname?: string // URL 路径
}

export async function createMetadata({
  params,
  parent,
  pageName,
  pathname = "/",
}: MetadataProps): Promise<Metadata> {
  // 获取翻译
  const t = await getTranslations("pages")

  // 从环境变量获取基本 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://indieshow.waveany.com"
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is not set")
  }

  // 构建规范链接
  const canonicalUrl = params.locale === "en"
    ? `${baseUrl}${pathname}`
    : `${baseUrl}/${params.locale}${pathname}`

  // 构建图片 URL
  const images = [
    {
      url: `${baseUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: t("defaults.title"),
    },
  ]

  // 获取页面特定的标题和描述
  const pageTitle = t(`${pageName}.title` as any)
  const pageDescription = t(`${pageName}.description` as any)

  // 获取父级元数据
  const parentMetadata = await parent

  // 构建基础元数据
  const baseMetadata: Metadata = {
    metadataBase: new URL(baseUrl),

    // 标题模板
    title: {
      template: parentMetadata?.title?.template || `%s - ${t("defaults.title")}`,
      default: pageTitle,
    },

    // 描述
    description: pageDescription,

    // 关键词
    keywords: t("defaults.keywords").split(","),

    // 作者信息
    authors: [
      { name: "WaveAny Team", url: baseUrl },
    ],
    creator: "WaveAny Team",
    publisher: "WaveAny Inc.",

    // robots配置
    robots: {
      index: true,
      follow: true,
    },

    // 规范链接和备用语言链接
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${pathname}`,
        zh: `${baseUrl}/zh${pathname}`,
      },
    },

    // Open Graph
    openGraph: {
      type: "website",
      siteName: parentMetadata?.openGraph?.siteName || t("defaults.title"),
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      locale: params.locale,
      alternateLocale: params.locale === "en" ? ["zh"] : ["en"],
      images,
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      site: "@waveany",
      creator: "@waveany",
      images: images[0].url,
    },

    // 图标
    icons: parentMetadata?.icons || {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },

    // manifest
    manifest: parentMetadata?.manifest || "/site.webmanifest",
  }

  return baseMetadata
}
