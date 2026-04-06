// Re-export all token types for type safety
export type ColorToken = 
  | 'primary-500' | 'primary-600'
  | 'secondary-500'
  | 'gray-50' | 'gray-200' | 'gray-400' | 'gray-500' | 'gray-700' | 'gray-900'
  | 'bg-base' | 'bg-surface' | 'bg-subtle' | 'bg-overlay'
  | 'accent-danger' | 'accent-warning' | 'accent-success'
  | 'border-subtle' | 'border-focus' | 'border-error';

export type SpacingToken = 
  | '0' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type RadiusToken = 
  | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type ShadowToken = 
  | 'sm' | 'md' | 'lg' | 'xl' | 'focus' | 'hover' | 'primary';

export type DurationToken = 'fast' | 'med' | 'slow' | 'slower';
export type EaseToken = 'standard' | 'spring' | 'enter' | 'exit';
