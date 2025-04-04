// 定义支持的语言类型，为 next-intl 4.0 增强类型，导入基础消息类型以便注册
import type enComponents from "../locales/components/en.json"
import type enMessages from "../locales/messages/en.json"
import type enPages from "../locales/pages/en.json"

export type Locale = "en" | "zh"

// 语言配置接口
export interface LocaleConfig {
  name: string
  flag?: string
  dir?: "ltr" | "rtl"
}

// 语言配置对象
export const localeConfigs: Record<Locale, LocaleConfig> = {
  en: {
    name: "English",
    dir: "ltr",
  },
  zh: {
    name: "中文",
    dir: "ltr",
  },
}

// 声明全局增强类型
declare module "next-intl" {
  interface AppConfig {
    // 注册消息类型，分别定义三个目录下的类型
    Messages: {
      components: typeof enComponents
      messages: typeof enMessages
      pages: typeof enPages
    }
    // 注册语言类型
    Locale: "en" | "zh"
  }
}
