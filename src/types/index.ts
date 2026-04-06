import { type HTMLAttributes, type ButtonHTMLAttributes, type InputHTMLAttributes } from 'react'

export interface UploadFile {
  id: string
  file: File
  name: string
  size: number
  type: string
  preview?: string
  progress: number
  status: 'idle' | 'uploading' | 'complete' | 'error'
  error?: string
}

export interface UploadState {
  files: UploadFile[]
  isUploading: boolean
  uploadProgress: number
  error?: string
}

export interface DragDropConfig {
  onFilesAccepted?: (files: File[]) => void
  onFilesRejected?: (errors: string[]) => void
  maxFiles?: number
  accept?: string[]
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  error?: string
}

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  description?: string
  error?: string
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'video' | 'elevated'
  hoverLift?: boolean
}

export interface ProgressBarProps {
  value: number
  label?: string
  showLabel?: boolean
  variant?: 'default' | 'success'
}

export interface SpinnerProps extends HTMLAttributes<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg'
}
