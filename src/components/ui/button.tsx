import type { VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow,transform,background-color] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hocus:bg-primary/90 hocus:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-white shadow-xs hocus:bg-destructive/90 hocus:scale-[1.02] active:scale-[0.98] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hocus:bg-accent hocus:text-accent-foreground hocus:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hocus:bg-secondary/80 hocus:scale-[1.02] active:scale-[0.98]",
        ghost: "hocus:bg-accent hocus:text-accent-foreground",
        link: "text-primary underline-offset-4 hocus:underline",
        subtle: "bg-muted/50 text-muted-foreground hocus:bg-muted hocus:text-foreground",
        glass: "bg-background/80 backdrop-blur-sm border border-border/30 shadow-glass dark:shadow-glass-dark hocus:bg-background/90 hocus:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        "default": "h-9 px-4 py-2 has-[>svg]:px-3",
        "sm": "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        "lg": "h-10 rounded-md px-6 has-[>svg]:px-4",
        "xl": "h-12 rounded-md px-8 text-base has-[>svg]:px-6",
        "icon": "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      isLoading: {
        true: "relative text-transparent transition-none hocus:text-transparent [&>span]:opacity-0 [&>svg]:opacity-0",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        className: "relative cursor-wait",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  isLoading = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-loading={isLoading ? "true" : undefined}
      className={cn(buttonVariants({ variant, size, isLoading, className }))}
      {...props}
    >
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="animate-spin size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            >
            </circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            >
            </path>
          </svg>
        </div>
      )}
      {props.children}
    </Comp>
  )
}

export { Button, buttonVariants }
