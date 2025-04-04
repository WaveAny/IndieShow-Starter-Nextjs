import { ArrowUpRight, Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations("components")

  return (
    <footer className="relative bg-background/80 backdrop-blur-sm">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-8 sm:py-12 lg:py-16">
        {/* 主要内容区域 */}
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          {/* 品牌区域 */}
          <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
            <div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Image
                  src="/logo.svg"
                  alt={`${t("header.title")} Logo`}
                  width={32}
                  height={32}
                  className="text-primary"
                />
                <span className="text-lg font-medium">{t("header.title")}</span>
              </div>
              <p className="mt-6 text-md text-muted-foreground">
                {t("footer.description")}
              </p>
            </div>
            {/* 社交媒体链接 */}
            <div className="flex items-center justify-center lg:justify-start -ml-3 pt-2">
              <a
                href="https://github.com/timhbw"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-foreground/70 hover:text-primary transition-all duration-300 p-3 rounded-xl hover:rounded-lg group"
                aria-label={t("footer.social.github")}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-xl group-hover:rounded-lg transition-all duration-300 backdrop-blur-[1px]" />
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="mailto:support@waveany.com"
                className="relative text-foreground/70 hover:text-primary transition-all duration-300 p-3 rounded-xl hover:rounded-lg group"
                aria-label={t("footer.social.email")}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-xl group-hover:rounded-lg transition-all duration-300 backdrop-blur-[1px]" />
                <Mail className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 导航链接区域 */}
          <div className="grid grid-cols-3 gap-6 lg:gap-20">
            {/* 关于 */}
            <div className="flex flex-col items-center">
              <h3 className="mb-6 font-bold">{t("footer.about")}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground w-full">
                <li className="font-medium hover:text-primary text-center">
                  <Link href="/#features">{t("footer.features")}</Link>
                </li>
                <li className="font-medium hover:text-primary text-center">
                  <Link href="/#showcase">{t("footer.showcase")}</Link>
                </li>
              </ul>
            </div>

            {/* 支持 */}
            <div className="flex flex-col items-center">
              <h3 className="mb-6 font-bold">{t("footer.support")}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground w-full">
                <li className="font-medium hover:text-primary text-center">
                  <a href="mailto:support@waveany.com">{t("footer.contact")}</a>
                </li>
                <li className="font-medium hover:text-primary text-center">
                  <Link href="/group">{t("footer.community")}</Link>
                </li>
              </ul>
            </div>

            {/* 友情链接 */}
            <div className="flex flex-col items-center">
              <h3 className="mb-6 font-bold">{t("footer.friends")}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground w-full">
                <li className="font-medium hover:text-primary text-center">
                  <a
                    href={t("footer.friends_links.0.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 group"
                    aria-label={`${t("footer.friends_links.0.name")} - ${t("footer.visit_external_site")}`}
                  >
                    <span>{t("footer.friends_links.0.name")}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-primary transition-colors" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部信息区域 */}
        <div className="mt-10 border-t border-border/40 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-2 md:gap-x-4 text-sm text-muted-foreground">
              <span className="whitespace-nowrap">
                ©
                {currentYear}
                {" "}
                {t("header.title")}
                {" "}
                {t("footer.copyright")}
              </span>
              <div className="flex items-center gap-x-4">
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 group hover:text-primary"
                  aria-label={`${t("footer.icp")} - ${t("footer.icp_accessible_hint")}`}
                >
                  <span>{t("footer.icp")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-primary transition-colors" aria-hidden="true" />
                </a>
                <span className="whitespace-nowrap">{t("footer.police")}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary" aria-label={t("footer.privacy")}>
                <span>{t("footer.privacy")}</span>
              </Link>
              <span className="text-border/60" aria-hidden="true">|</span>
              <Link href="/terms" className="hover:text-primary" aria-label={t("footer.terms")}>
                <span>{t("footer.terms")}</span>
              </Link>
              <span className="text-border/60" aria-hidden="true">|</span>
              <Link href="/sales" className="hover:text-primary" aria-label={t("footer.sales")}>
                <span>{t("footer.sales")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
