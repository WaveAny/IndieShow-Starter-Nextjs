import matter from "gray-matter"
import { cache } from "react"

/**
 * 获取指定语言的 Markdown 内容（缓存版本）
 * 使用React的cache函数优化数据获取，避免重复计算
 * 这是服务器组件中推荐的缓存数据方式
 * @param fileName - 文件名（不包含扩展名）
 * @param lang - 语言代码 (en/zh)
 * @returns Markdown 内容和元数据
 */
export const getMarkdownContent = cache(async (fileName: string, lang: string = "en") => {
  try {
    // 使用动态导入加载 Markdown 文件
    const content = await import(`@/app/content/${lang}/${fileName}.md`)

    // 使用 gray-matter 解析 frontmatter
    const { data, content: markdownContent } = matter(content.default || content)

    return {
      content: markdownContent,
      metadata: data,
    }
  }
  catch (error) {
    console.error(`Failed to load markdown content for ${fileName} in ${lang}:`, error)
    // 返回空内容作为回退
    return {
      content: "",
      metadata: {},
    }
  }
})

/**
 * 获取所有可用的语言版本（缓存版本）
 * 使用React的cache函数优化数据获取，避免重复计算
 * @param fileName - 文件名（不包含扩展名）
 * @returns 可用的语言列表
 */
export const getAvailableLanguages = cache(async (fileName: string): Promise<string[]> => {
  const supportedLanguages = ["en", "zh"]
  const availableLanguages = []

  for (const lang of supportedLanguages) {
    try {
      await import(`@/app/content/${lang}/${fileName}.md`)
      availableLanguages.push(lang)
    }
    catch {
      // 如果文件不存在，跳过这个语言
      continue
    }
  }

  return availableLanguages
})
