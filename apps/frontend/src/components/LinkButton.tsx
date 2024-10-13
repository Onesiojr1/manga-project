import Link from "next/link"
import {cva, VariantProps} from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode,
  href: string
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient text-white',
      secondary: '',
      tertiary: 'bg-red-gradient',
    },
    size: {
      small: 'text-xs px-5 h-10',
      medium: 'text-2xl px-6 h-12',
      large: 'text-4xl px-10 h-20',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  }
})

export default function LinkButton({children, href, variant, size}: ButtonProps) {
  return (
    <Link href={href} className={buttonClasses({variant, size})}>{children}</Link>
  )
}