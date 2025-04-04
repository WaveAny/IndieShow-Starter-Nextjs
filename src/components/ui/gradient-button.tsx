import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "primary" | "outline"
}

export function GradientButton({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  className,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      size="lg"
      variant={variant === "primary" ? "default" : "ghost"}
      className={cn(
        "w-full sm:w-auto px-8 py-6 rounded-full font-medium text-lg transition-all cursor-pointer",
        "hover:scale-[1.02] active:scale-[0.98]",
        variant === "primary" && "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25",
        variant === "outline" && "bg-background text-foreground border border-border hover:bg-background hover:text-foreground hover:border-border/80",
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </Button>
  )
}
