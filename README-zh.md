🌍 [English](./README.md) | [简体中文](./README-zh.md)

<div align="center">

# IndieShow-Starter-Nextjs

### IndieShow: 🚀 为独立开发者打造的 Next.js 15 + Tailwind CSS 4 + TypeScript 产品展示模板

专注于开发体验: 🖥️ Next.js 15 + 🛠️ TypeScript + 🎨 Tailwind CSS 4 + 🌐 next-intl + 📄 React Markdown + 🔍 ESLint + 📊 多种分析工具 + ☁️ Vercel.
通过这个优雅、高性能且SEO友好的基础框架，快速启动您的全球化 AI SaaS 应用。

[![GitHub license](https://img.shields.io/github/license/WaveAny/IndieShow-Starter-Nextjs)](https://github.com/WaveAny/IndieShow-Starter-Nextjs/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/WaveAny/IndieShow-Starter-Nextjs)](https://github.com/WaveAny/IndieShow-Starter-Nextjs/stargazers)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/badge/pnpm-%3E%3D8.0.0-blue)](https://pnpm.io)
[![Next Version](https://img.shields.io/badge/next-15.2.0-black.svg?logo=next.js)](https://nextjs.org)

</div>

## 💡 项目概述

IndieShow-Starter-Nextjs 是一个专为独立开发者设计的产品展示网站模板。基于 Next.js 15 + Tailwind CSS 4 + TypeScript 构建，您可以通过简单的配置在几分钟内创建一个专业的产品展示网站！

### 🎯 使用场景

- 🏢 初创公司的产品展示
- 👨‍💻 独立开发者的作品集
- 🛠️ 开发项目的快速启动模板

## ⚡ 性能表现

| 测试项目                  | 得分 | 基准线 |
| ------------------------- | ---- | ------ |
| Google PageSpeed (移动端) | 94   | > 90   |
| Google PageSpeed (桌面端) | 100  | > 90   |

<table>
  <tr>
    <td width="50%" align="center">
      <strong>移动端性能</strong>
      <br>
      <sub><img src="./public/images/IndieShow-pagespeed-mobile.png?raw=true" alt="IndieShow-pagespeed-mobile"></sub>
    </td>
    <td width="50%" align="center">
      <strong>桌面端性能</strong>
      <br>
      <sub><img src="./public/images/IndieShow-pagespeed-pc.png?raw=true" alt="IndieShow-pagespeed-pc"></sub>
    </td>
  </tr>
</table>

## 🎨 主题预览

<table>
  <tr>
    <td width="50%" align="center">
      <strong>浅色主题</strong>
      <br>
      <sub><img  src="./public/images/IndieShow-light.png?raw=true" alt="IndieShow-light"></sub>
    </td>
    <td width="50%" align="center">
      <strong>深色主题</strong>
      <br>
      <sub><img src="./public/images/IndieShow-dark.png?raw=true" alt="IndieShow-dark"></sub>
    </td>
  </tr>
</table>

## 🌈 在线演示

- **演示站点**: [https://indieshow.waveany.com](https://indieshow.waveany.com)
- **开发文档**: [查看文档](https://docs.waveany.com)

<p align="center">
  <a href="https://indieshow.waveany.com/"><img src="./public/images/IndieShow-banner.png?raw=true" alt="IndieShow banner"></a>
  <a href="https://indieshow.waveany.com/"><img src="./public/images/IndieShow-MyWorkWithGroup.png?raw=true" alt="IndieShow-MyWorkWithFooter"></a>
</p>

## 🚀 技术栈

![Next.js](https://img.shields.io/badge/-Next.js-%23000000?style=for-the-badge&logo=Next.js)
![React](https://img.shields.io/badge/-React-%2361DAFB?style=for-the-badge&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-%2306B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)

- **框架**: Next.js 15 App Router
- **国际化**: next-intl 4，支持自动识别用户语言，支持英文、中文切换
- **主题**: next-themes，支持明亮/暗黑模式，默认跟随系统
- **样式**: Tailwind CSS 4，支持容器查询、自定义变体
- **类型**: TypeScript 5
- **组件库**:
  - 基础组件: shadcn/ui
  - 视觉优化组件: magicui
- **图标**: lucide-react
- **动画**: framer-motion
- **分析工具**: 集成Google Analytics、百度统计、OpenPanel、Plausible、Umami

## 📦 项目结构

```
src/
├── app/                # Next.js App Router
│   ├── [locale]/       # 国际化路由
│   │   ├── layout.tsx  # 根布局
│   │   ├── page.tsx    # 首页
│   │   ├── (legal)/    # 法律页面路由组
│   │   └── group/      # 社区组页面
├── components/         # 组件目录
│   ├── block/          # 区块组件 (Hero, Feature, ShowCase, CTA)
│   ├── client/         # 客户端组件
│   ├── layout/         # 布局组件 (Header, Footer)
│   ├── magicui/        # Magic UI 组件
│   ├── markdown/       # Markdown渲染组件
│   ├── providers/      # 提供者组件
│   └── ui/             # UI组件
├── i18n/               # 国际化
│   ├── config/         # 国际化配置
│   ├── locales/        # 语言文件
│   └── types/          # 类型定义
├── lib/                # 工具库
│   ├── analytics/      # 分析工具
│   ├── api/            # API工具
│   └── utils/          # 通用工具
├── styles/             # 样式文件
│   ├── globals.css     # 全局样式
│   └── theme.css       # 主题颜色
└── middleware.ts       # 中间件
```

## ✨ 核心特性

### 🚀 开发体验

- 使用最新依赖版本并持续更新
- 基于 App Router 的服务器组件和客户端组件分明
- 完整的 TypeScript 类型支持
- 统一的代码风格和格式化规则

### 🎨 UI设计

- 基于Tailwind CSS 4的响应式设计
- 明/暗主题切换，跟随系统主题
- 美观的过渡和页面效果
- 可自定义的主题颜色（OKLCH色彩空间）

### 🌍 国际化

- 使用next-intl 4.0支持英文和中文，易于扩展
- 类型安全的国际化消息
- 符合GDPR规范的本地化Cookie处理
- URL中自动添加语言前缀（如/zh）

### 📱 多平台适配

- 完美适配移动端和桌面端
- 针对不同设备优化交互
- 在组件级别使用容器查询实现精确响应式

### 🔍 SEO优化

- 基于Next.js 15的服务器端渲染支持
- 完整的Meta标签支持
- 可自定义的页面标题和描述
- 使用React服务器组件减少客户端JS的体积

### ⚡️ 性能优化

- 自动代码分割
- 图片优化（使用Next.js Image组件）
- 智能组件懒加载
- 使用服务器缓存和增量静态再生成

## 🔧 主题定制

### 直接编辑 theme.css

您可以直接编辑 `src/styles/theme.css` 文件来修改主题颜色。该文件使用 OKLCH 颜色空间，提供更好的感知均匀性和更广的色域。

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.5098 0.2392 265.87);
  /* 其他颜色变量... */
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  /* 暗色主题下的其他颜色变量... */
}
```

## 🧩 组件架构

项目采用了服务器组件和客户端组件分离的架构，以充分利用Next.js 15的性能优势：

- **服务器组件**：默认所有组件都是服务器组件，减少客户端JS体积
- **客户端组件**：需要交互、状态或浏览器API的组件存放在`src/components/client/`目录下
- **包装模式**：服务器组件包装客户端组件，使用时无需感知差异

```tsx
import type { LanguageSwitcherProps } from '@/components/client/language-switcher-client'
// 服务器组件包装 (src/components/ui/language-switcher.tsx)
import { LanguageSwitcherClient } from '@/components/client/language-switcher-client'

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  return <LanguageSwitcherClient {...props} />
}

// 客户端组件实现 (src/components/client/language-switcher-client.tsx)
'use client'
export function LanguageSwitcherClient() {
  // 客户端状态和交互逻辑
}
```

## 📊 分析工具集成

项目集成了多种流行的网站分析和统计工具，以提供全面的用户访问和行为数据：

1. **Google Analytics**

   - 通过 `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` 环境变量配置

2. **百度统计**

   - 通过 `NEXT_PUBLIC_BAIDU_ANALYTICS_ID` 环境变量配置

3. **OpenPanel**

   - 通过 `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` 环境变量配置

4. **Plausible**

   - 通过 `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` 环境变量配置

5. **Umami**
   - 通过 `NEXT_PUBLIC_UMAMI_WEBSITE_ID` 环境变量配置

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18.0
- pnpm ≥ 8.0

### 开发流程

1. **克隆项目**

```bash
git clone https://github.com/WaveAny/IndieShow-Starter-Nextjs.git
cd IndieShow-Starter-Nextjs
pnpm install
```

2. **配置环境变量**

```bash
cp .env.example .env.local
```

3. **启动开发服务器**

```bash
pnpm dev
```

4. **构建与部署**

```bash
# 生产环境构建
pnpm build

# 启动生产服务器
pnpm start
```

5. **一键部署**

推荐使用Vercel部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/WaveAny/IndieShow-Starter-Nextjs)

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 授权。

## 🙏 致谢

- [Next.js 15](https://nextjs.org) - React全栈框架
- [React 19](https://react.dev) - JavaScript UI库
- [Tailwind CSS 4](https://tailwindcss.com) - 实用优先的CSS框架
- [shadcn/ui](https://ui.shadcn.com/) - 可重用的组件库

## 📮 联系方式

- GitHub问题: [提交问题](https://github.com/WaveAny/IndieShow-Starter-Nextjs/issues)
- 电子邮件: <support@waveany.com>
