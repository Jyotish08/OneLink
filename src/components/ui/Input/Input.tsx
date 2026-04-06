import React, { useId } from 'react'
import { cn } from '@/utils/cn'
import type { InputProps, TextareaProps } from '@/types'
import './Input.css'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className="field">
        {label && (
          <label htmlFor={inputId} className="field-label">
            {label}
          </label>
        )}
        
        {description && (
          <p id={descriptionId} className="field-description">
            {description}
          </p>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={cn('input', { 'input-error': error }, className)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : description ? descriptionId : undefined}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="field-error-text" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id || generatedId
    const errorId = `${textareaId}-error`
    const descriptionId = `${textareaId}-description`

    return (
      <div className="field">
        {label && (
          <label htmlFor={textareaId} className="field-label">
            {label}
          </label>
        )}
        
        {description && (
          <p id={descriptionId} className="field-description">
            {description}
          </p>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          className={cn('input textarea', { 'input-error': error }, className)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : description ? descriptionId : undefined}
          {...props}
        />
        
        {error && (
          <p id={errorId} className="field-error-text" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
