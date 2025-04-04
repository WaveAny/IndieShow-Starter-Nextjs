# 使用固定版本标签，避免使用 latest
# 定义基础镜像版本
ARG NODE_VERSION=22.14.0
ARG ALPINE_VERSION=3.21
ARG PNPM_VERSION=10.4.1

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS deps
WORKDIR /app

# 只复制依赖相关文件，提高缓存命中率
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并设置依赖
RUN npm i -g corepack@latest && \
    corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate && \
    pnpm i --frozen-lockfile --ignore-scripts && \
    # 清理缓存
    pnpm store prune && \
    rm -rf /root/.npm /root/.pnpm-store /tmp/*

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS builder
WORKDIR /app

# 定义构建参数
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SITE_NAME
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
ARG NEXT_PUBLIC_BAIDU_ANALYTICS_ID
ARG NEXT_PUBLIC_OPENPANEL_CLIENT_ID
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 设置环境变量
ENV NODE_ENV=production \
    NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_SITE_NAME=${NEXT_PUBLIC_SITE_NAME} \
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} \
    NEXT_PUBLIC_BAIDU_ANALYTICS_ID=${NEXT_PUBLIC_BAIDU_ANALYTICS_ID} \            
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID=${NEXT_PUBLIC_OPENPANEL_CLIENT_ID} \    
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN=${NEXT_PUBLIC_PLAUSIBLE_DOMAIN} \    
    NEXT_PUBLIC_UMAMI_WEBSITE_ID=${NEXT_PUBLIC_UMAMI_WEBSITE_ID} \
    NEXT_TELEMETRY_DISABLED=1

# 构建应用
RUN npm i -g corepack@latest && \
    corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate && \
    pnpm build

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runner
WORKDIR /app

# 安装必要的安全更新和工具
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    && rm -rf /var/cache/apk/*

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 设置生产环境
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    # 设置 Node.js 环境参数
    NODE_OPTIONS="--max-old-space-size=8192"

# 从 builder 阶段复制构建产物
COPY --from=builder /app/public ./public
# Next.js 特定目录结构
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 设置安全相关配置
RUN chmod -R 550 ./public && \    
    # 删除不必要的文件
    rm -rf /tmp/* /var/cache/apk/* && \
    # 设置目录所有权
    chown -R nextjs:nodejs .

# 切换到非 root 用户
USER nextjs

# 添加标签
LABEL maintainer="timhbw@gmail.com" \
      version="1.0.0" \
      description="WaveAny" \
      node.version="${NODE_VERSION}"

EXPOSE ${PORT}

# 使用 exec 格式的 CMD
CMD ["node", "server.js"]
