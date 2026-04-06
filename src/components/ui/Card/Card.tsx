import React from 'react'
import { cn } from '@/utils/cn'
import type { CardProps } from '@/types'
import './Card.css'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverLift = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'card',
          variant === 'video' && 'card-video',
          hoverLift && 'hover-lift',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('card-header', className)} {...props}>
      {children}
    </div>
  )
)
CardHeader.displayName = 'CardHeader'

export const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('card-body', className)} {...props}>
      {children}
    </div>
  )
)
CardBody.displayName = 'CardBody'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('card-footer', className)} {...props}>
      {children}
    </div>
  )
)
CardFooter.displayName = 'CardFooter'
