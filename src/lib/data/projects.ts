import type { LucideIcon } from "lucide-react"
import { Apple, Chrome, Globe, Monitor, Smartphone } from "lucide-react"

// 平台图标映射
export const platformIcons: Record<string, LucideIcon> = {
  web: Globe,
  desktop: Monitor,
  mobile: Smartphone,
  ios: Apple,
  android: Smartphone,
  browser: Chrome,
}

// 项目类型
export type ProjectType = "web" | "mobile" | "desktop"

// 项目平台
export type ProjectPlatform = "web" | "desktop" | "mobile" | "ios" | "android" | "browser"

// 项目标签
export interface ProjectTag {
  name: string
  color: string
  icon: string
}

// 项目平台配置
export interface ProjectPlatformConfig {
  icon: ProjectPlatform
}

// 项目接口
export interface Project {
  id: string // 既是唯一标识符，也是国际化关键字，用于查找翻译
  image: string
  type: ProjectType
  isOnline: boolean
  tags: ProjectTag[]
  platforms: ProjectPlatformConfig[]
  demo: string
  github: string
  qrCode?: string
}

// 项目列表数据
export const projects: Project[] = [
  {
    id: "project1",
    image: "/logo.svg",
    type: "web",
    isOnline: true,
    tags: [
      { name: "Next.js", color: "text-blue-500", icon: "typescript" },
      { name: "TypeScript", color: "text-blue-500", icon: "typescript" },
      { name: "Tailwind CSS", color: "text-sky-500", icon: "css" },
    ],
    platforms: [
      { icon: "web" },
    ],
    demo: "https://indie-show-starter-nuxt.vercel.app/",
    github: "https://github.com/WaveAny/IndieShow-Starter-Nuxt",
    qrCode: "/qr-code.png",
  },
  {
    id: "project2",
    image: "/logo.svg",
    type: "web",
    isOnline: false,
    tags: [
      { name: "Next.js", color: "text-blue-500", icon: "typescript" },
      { name: "TypeScript", color: "text-blue-500", icon: "typescript" },
      { name: "Tailwind CSS", color: "text-sky-500", icon: "css" },
    ],
    platforms: [
      { icon: "web" },
    ],
    demo: "https://indie-show-starter-nextjs.vercel.app/",
    github: "https://github.com/WaveAny/IndieShow-Starter-Nextjs",
    qrCode: "/qr-code.png",
  },
  {
    id: "project3",
    image: "/logo.svg",
    type: "mobile",
    isOnline: true,
    tags: [
      { name: "React", color: "text-blue-500", icon: "react" },
      { name: "Node.js", color: "text-green-500", icon: "nodejs" },
      { name: "MongoDB", color: "text-green-500", icon: "mongodb" },
    ],
    platforms: [
      { icon: "ios" },
      { icon: "android" },
    ],
    demo: "https://waveany.com",
    github: "https://github.com/waveany",
    qrCode: "/qr-code.png",
  },
  {
    id: "project4",
    image: "/logo.svg",
    type: "desktop",
    isOnline: true,
    tags: [
      { name: "React", color: "text-blue-500", icon: "react" },
      { name: "Node.js", color: "text-green-500", icon: "nodejs" },
      { name: "MongoDB", color: "text-green-500", icon: "mongodb" },
    ],
    platforms: [
      { icon: "ios" },
      { icon: "android" },
    ],
    demo: "https://waveany.com",
    github: "https://github.com/waveany",
    qrCode: "/qr-code.png",
  },
  {
    id: "project5",
    image: "/logo.svg",
    type: "mobile",
    isOnline: true,
    tags: [
      { name: "React", color: "text-blue-500", icon: "react" },
      { name: "Node.js", color: "text-green-500", icon: "nodejs" },
      { name: "MongoDB", color: "text-green-500", icon: "mongodb" },
    ],
    platforms: [
      { icon: "ios" },
      { icon: "android" },
    ],
    demo: "https://waveany.com",
    github: "https://github.com/waveany",
    qrCode: "/qr-code.png",
  },
  {
    id: "project6",
    image: "/logo.svg",
    type: "mobile",
    isOnline: true,
    tags: [
      { name: "React", color: "text-blue-500", icon: "react" },
      { name: "Node.js", color: "text-green-500", icon: "nodejs" },
      { name: "MongoDB", color: "text-green-500", icon: "mongodb" },
    ],
    platforms: [
      { icon: "ios" },
      { icon: "android" },
    ],
    demo: "https://demo.com",
    github: "https://github.com",
    qrCode: "/qr-code.png",
  },
]

// 分类列表
export const projectCategories = [
  { key: "all", type: "all" },
  { key: "web", type: "web" },
  { key: "mobile", type: "mobile" },
  { key: "desktop", type: "desktop" },
]
