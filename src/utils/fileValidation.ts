export const VALID_VIDEO_TYPES = [
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-matroska',
  'video/webm',
]

export const MAX_FILE_SIZE = 2 * 1024 * 1024 * 1024 // 2GB

export interface FileValidationResult {
  isValid: boolean
  error?: string
}

export function validateFile(file: File): FileValidationResult {
  // Check file type
  if (!VALID_VIDEO_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: 'Unsupported file type. Please upload MP4, MOV, AVI, MKV, or WebM.',
    }
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: 'File too large. Maximum size is 2GB.',
    }
  }

  return { isValid: true }
}

export function getVideoExtension(file: File): string {
  const typeMap: Record<string, string> = {
    'video/mp4': '.mp4',
    'video/quicktime': '.mov',
    'video/x-msvideo': '.avi',
    'video/x-matroska': '.mkv',
    'video/webm': '.webm',
  }
  return typeMap[file.type] || '.video'
}
