🌍 [English](./README.md) | [简体中文](./README-zh.md)

<div align="center">

# IndieShow-Starter-Nextjs

### IndieShow: 🚀 A Next.js 15 + Tailwind CSS 4 + TypeScript Product Showcase Template for Indie Developers

Focused on development experience: 🖥️ Next.js 15 + 🛠️ TypeScript + 🎨 Tailwind CSS 4 + 🌐 next-intl + 📄 React Markdown + 🔍 ESLint + 📊 Multiple Analytics Tools + ☁️ Vercel.
Quickly launch your global AI SaaS application with this elegant, high-performance, and SEO-friendly framework.

[![GitHub license](https://img.shields.io/github/license/WaveAny/IndieShow-Starter-Nextjs)](https://github.com/WaveAny/IndieShow-Starter-Nextjs/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/WaveAny/IndieShow-Starter-Nextjs)](https://github.com/WaveAny/IndieShow-Starter-Nextjs/stargazers)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/badge/pnpm-%3E%3D8.0.0-blue)](https://pnpm.io)
[![Next Version](https://img.shields.io/badge/next-15.2.0-black.svg?logo=next.js)](https://nextjs.org)

</div>

## 💡 Project Overview

IndieShow-Starter-Nextjs is a product showcase website template designed specifically for indie developers. Built on Next.js 15 + Tailwind CSS 4 + TypeScript, you can create a professional product showcase website in minutes with simple configuration!

### 🎯 Use Cases

- 🏢 Product showcases for startups
- 👨‍💻 Portfolio for independent developers
- 🛠️ Quick-start template for development projects

## ⚡ Performance

| Test Item                  | Score | Baseline |
| -------------------------- | ----- | -------- |
| Google PageSpeed (Mobile)  | 94    | > 90     |
| Google PageSpeed (Desktop) | 100   | > 90     |

<table>
  <tr>
    <td width="50%" align="center">
      <strong>Mobile Performance</strong>
      <br>
      <sub><img src="./public/images/IndieShow-pagespeed-mobile.png?raw=true" alt="IndieShow-pagespeed-mobile"></sub>
    </td>
    <td width="50%" align="center">
      <strong>Desktop Performance</strong>
      <br>
      <sub><img src="./public/images/IndieShow-pagespeed-pc.png?raw=true" alt="IndieShow-pagespeed-pc"></sub>
    </td>
  </tr>
</table>

## 🎨 Theme Preview

<table>
  <tr>
    <td width="50%" align="center">
      <strong>Light Theme</strong>
      <br>
      <sub><img  src="./public/images/IndieShow-light.png?raw=true" alt="IndieShow-light"></sub>
    </td>
    <td width="50%" align="center">
      <strong>Dark Theme</strong>
      <br>
      <sub><img src="./public/images/IndieShow-dark.png?raw=true" alt="IndieShow-dark"></sub>
    </td>
  </tr>
</table>

## 🌈 Live Demo

- **Demo Site**: [https://indieshow.waveany.com](https://indieshow.waveany.com)
- **Documentation**: [View Docs](https://docs.indieshow.waveany.com/nextjs)

<p align="center">
  <a href="https://indieshow.waveany.com/"><img src="./public/images/IndieShow-banner.png?raw=true" alt="IndieShow banner"></a>
  <a href="https://indieshow.waveany.com/"><img src="./public/images/IndieShow-MyWorkWithGroup.png?raw=true" alt="IndieShow-MyWorkWithFooter"></a>
</p>

## 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/-Next.js-%23000000?style=for-the-badge&logo=Next.js)
![React](https://img.shields.io/badge/-React-%2361DAFB?style=for-the-badge&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-%2306B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)

- **Framework**: Next.js 15 App Router
- **Internationalization**: next-intl 4, with automatic language detection, supports English and Chinese switching
- **Theming**: next-themes, supports light/dark modes, follows system preferences by default
- **Styling**: Tailwind CSS 4, with container queries and custom variants
- **Typing**: TypeScript 5
- **Component Libraries**:
  - Basic components: shadcn/ui
  - Visually enhanced components: magicui
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Analytics Tools**: Integration with Google Analytics, Baidu Analytics, OpenPanel, Plausible, and Umami

## 📦 Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── [locale]/       # Internationalized routes
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── (legal)/    # Legal pages route group
│   │   └── group/      # Community group page
├── components/         # Components directory
│   ├── block/          # Block components (Hero, Feature, ShowCase, CTA)
│   ├── client/         # Client components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── magicui/        # Magic UI components
│   ├── markdown/       # Markdown rendering components
│   ├── providers/      # Provider components
│   └── ui/             # UI components
├── i18n/               # Internationalization
│   ├── config/         # i18n configuration
│   ├── locales/        # Language files
│   └── types/          # Type definitions
├── lib/                # Utility libraries
│   ├── analytics/      # Analytics tools
│   ├── api/            # API utilities
│   └── utils/          # Common utilities
├── styles/             # Style files
│   ├── globals.css     # Global styles
│   └── theme.css       # Theme colors
└── middleware.ts       # Middleware
```

## ✨ Core Features

### 🚀 Development Experience

- Using the latest dependency versions with continuous updates
- Clear distinction between server and client components based on App Router
- Complete TypeScript type support
- Consistent code style and formatting rules

### 🎨 UI Design

- Responsive design based on Tailwind CSS 4
- Light/dark theme switching, following system theme
- Beautiful transitions and page effects
- Customizable theme colors (OKLCH color space)

### 🌍 Internationalization

- Support for English and Chinese using next-intl 4.0, easily extendable
- Type-safe internationalized messages
- GDPR-compliant localization cookie handling
- Automatic language prefix in URLs (e.g., /zh)

### 📱 Multi-platform Adaptation

- Perfect adaptation for mobile and desktop
- Optimized interactions for different devices
- Precise responsive design using container queries at the component level

### 🔍 SEO Optimization

- Server-side rendering support based on Next.js 15
- Complete Meta tag support
- Customizable page titles and descriptions
- Reduced client-side JS volume using React Server Components

### ⚡️ Performance Optimization

- Automatic code splitting
- Image optimization (using Next.js Image component)
- Intelligent component lazy loading
- Server caching and incremental static regeneration

## 🔧 Theme Customization

### Direct editing of theme.css

You can directly edit the `src/styles/theme.css` file to modify theme colors. This file uses the OKLCH color space, providing better perceptual uniformity and a wider color gamut.

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.5098 0.2392 265.87);
  /* Other color variables... */
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  /* Dark theme color variables... */
}
```

## 🧩 Component Architecture

The project adopts a server component and client component separation architecture to fully leverage the performance advantages of Next.js 15:

- **Server Components**: All components are server components by default, reducing client-side JS volume
- **Client Components**: Components requiring interaction, state, or browser APIs are stored in the `src/components/client/` directory
- **Wrapper Pattern**: Server components wrap client components, eliminating the need to be aware of differences when using them

```tsx
import type { LanguageSwitcherProps } from '@/components/client/language-switcher-client'
// Server component wrapper (src/components/ui/language-switcher.tsx)
import { LanguageSwitcherClient } from '@/components/client/language-switcher-client'

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  return <LanguageSwitcherClient {...props} />
}

// Client component implementation (src/components/client/language-switcher-client.tsx)
'use client'
export function LanguageSwitcherClient() {
  // Client-side state and interaction logic
}
```

## 📊 Analytics Tools Integration

The project integrates multiple popular website analytics and statistics tools to provide comprehensive user access and behavior data:

1. **Google Analytics**

   - Configured via the `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` environment variable

2. **Baidu Analytics**

   - Configured via the `NEXT_PUBLIC_BAIDU_ANALYTICS_ID` environment variable

3. **OpenPanel**

   - Configured via the `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` environment variable

4. **Plausible**

   - Configured via the `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` environment variable

5. **Umami**
   - Configured via the `NEXT_PUBLIC_UMAMI_WEBSITE_ID` environment variable

## 🚀 Quick Start

### Requirements

- Node.js ≥ 18.0
- pnpm ≥ 8.0

### Development Process

1. **Clone the project**

```bash
git clone https://github.com/WaveAny/IndieShow-Starter-Nextjs.git
cd IndieShow-Starter-Nextjs
pnpm install
```

2. **Configure environment variables**

```bash
cp .env.example .env.local
```

3. **Start the development server**

```bash
pnpm dev
```

4. **Build and deploy**

```bash
# Production build
pnpm build

# Start production server
pnpm start
```

5. **One-click deployment**

Recommended to deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/WaveAny/IndieShow-Starter-Nextjs)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Next.js 15](https://nextjs.org) - React full-stack framework
- [React 19](https://react.dev) - JavaScript UI library
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library

## 📮 Contact

- GitHub Issues: [Submit Issue](https://github.com/WaveAny/IndieShow-Starter-Nextjs/issues)
- Email: <support@waveany.com>
