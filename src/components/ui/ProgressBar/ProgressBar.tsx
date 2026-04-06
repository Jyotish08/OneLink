import React from 'react'
import { cn } from '@/utils/cn'
import type { ProgressBarProps } from '@/types'
import './ProgressBar.css'

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showLabel = true,
  variant = 'default',
}) => {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div 
      className="progress-bar" 
      role="progressbar" 
      aria-valuenow={clampedValue} 
      aria-valuemin={0} 
      aria-valuemax={100}
      aria-label={label || 'Upload progress'}
    >
      <div
        className={cn('progress-bar__fill', variant === 'success' && 'success')}
        style={{ width: `${clampedValue}%` }}
      />
      {showLabel && label && (
        <span className="progress-bar__label">{label}</span>
      )}
    </div>
  )
}
