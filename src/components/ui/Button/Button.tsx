import React from 'react'
import { cn } from '@/utils/cn'
import { Spinner } from '../Spinner'
import type { ButtonProps } from '@/types'
import './Button.css'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'btn',
          `btn-${variant}`,
          `btn-${size}`,
          { isLoading, 'btn-icon': !children && (leftIcon || rightIcon) },
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Spinner className="absolute" size={size === 'sm' ? 'sm' : 'md'} />}
        <span className="btn-content">
          {leftIcon && <span className="w-4 h-4 flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="w-4 h-4 flex-shrink-0">{rightIcon}</span>}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
