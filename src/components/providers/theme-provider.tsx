"use client"

import type { ComponentProps } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      storageKey="waveany-theme"
      enableSystem
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  )
}
