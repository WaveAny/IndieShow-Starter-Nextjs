import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/i18n/config/request.ts")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // 输出独立的可部署应用
  output: "standalone",

  // 实验性特性配置
  experimental: {
    // 优化服务器组件渲染
    optimizeServerReact: true,
    // 优化包大小
    optimizePackageImports: ["lucide-react"],
  },

  // 内容安全策略
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ]
  },

  /* 其他配置选项 */
  eslint: {
    // 禁用 Next.js 的 ESLint 配置检查
    ignoreDuringBuilds: true,
  },

  // 图片配置
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // 稳定功能（以前是实验性功能）
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ["sharp"],

  // 添加 webpack 配置
  webpack: (config) => {
    // 支持 Markdown 文件
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    })

    return config
  },
}

export default withNextIntl(nextConfig)
