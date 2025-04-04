"use client"

import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { GA_TRACKING_ID, pageview as gaPageview, initGoogleAnalytics } from "@/lib/analytics/google-analytics"
import { BAIDU_ID, pageview as baiduPageview, initBaiduAnalytics } from "@/lib/analytics/baidu-analytics"
import { OP_CLIENT_ID, initOpenPanelAnalytics } from "@/lib/analytics/openpanel-analytics"
import { PLAUSIBLE_DOMAIN, initPlausibleAnalytics } from "@/lib/analytics/plausible-analytics"
import { UMAMI_WEBSITE_ID, initUmamiAnalytics } from "@/lib/analytics/umami-analytics"

/**
 * 包含 useSearchParams 的子组件
 * 由于 useSearchParams 需要 Suspense 边界，所以分离出来
 */
function SearchParamsAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 当路由发生变化时，发送 pageview 事件
  useEffect(() => {
    if (pathname) {
      // 构建完整的 URL 路径，包括查询参数
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

      // 发送各平台的 pageview 事件
      if (GA_TRACKING_ID) {
        gaPageview(url)
      }

      if (BAIDU_ID) {
        baiduPageview(url)
      }
    }
  }, [pathname, searchParams])

  return null
}

/**
 * 初始化统计服务的组件
 */
function InitAnalytics() {
  // 初始化所有统计服务
  useEffect(() => {
    // 只在客户端运行
    if (typeof window === "undefined")
      return

    // 初始化各个统计服务
    if (GA_TRACKING_ID) {
      initGoogleAnalytics()
    }

    if (BAIDU_ID) {
      initBaiduAnalytics()
    }

    if (OP_CLIENT_ID) {
      initOpenPanelAnalytics()
    }

    if (PLAUSIBLE_DOMAIN) {
      initPlausibleAnalytics()
    }

    if (UMAMI_WEBSITE_ID) {
      initUmamiAnalytics()
    }
  }, [])

  return null
}

/**
 * Analytics Provider 组件
 *
 * 集成多个分析工具，包括：
 * 1. Google Analytics
 * 2. 百度统计
 * 3. OpenPanel
 * 4. Plausible
 * 5. Umami
 */
export function AnalyticsProvider() {
  return (
    <>
      <InitAnalytics />
      <Suspense fallback={null}>
        <SearchParamsAnalytics />
      </Suspense>
    </>
  )
}
