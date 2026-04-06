/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--color-primary-500, #335CFF)',
          600: 'var(--color-primary-600, #2645CC)',
        },
        secondary: {
          500: 'var(--color-secondary-500, #00B386)',
        },
        gray: {
          50: 'var(--color-gray-50, #F8FAFC)',
          200: 'var(--color-gray-200, #E2E8F0)',
          400: 'var(--color-gray-400, #94A3B8)',
          500: 'var(--color-gray-500, #64748B)',
          700: 'var(--color-gray-700, #334155)',
          900: 'var(--color-gray-900, #020617)',
        },
        bg: {
          base: 'var(--color-bg-base, #020617)',
          surface: 'var(--color-bg-surface, rgba(15, 23, 42, 0.86))',
          subtle: 'var(--color-bg-subtle, rgba(15, 23, 42, 0.60))',
          overlay: 'var(--color-bg-overlay, rgba(2, 6, 23, 0.75))',
        },
        accent: {
          danger: 'var(--color-accent-danger, #FF4C4C)',
          warning: 'var(--color-accent-warning, #F5A623)',
          success: 'var(--color-accent-success, #00B386)',
        },
        border: {
          subtle: 'var(--color-border-subtle, rgba(148, 163, 184, 0.25))',
          focus: 'var(--color-border-focus, rgba(51, 92, 255, 0.85))',
          error: 'var(--color-border-error, rgba(255, 76, 76, 0.85))',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans, Inter, system-ui, sans-serif)',
        display: 'var(--font-display, Inter, system-ui, sans-serif)',
      },
      fontSize: {
        xs: ['var(--text-xs, 0.75rem)', { lineHeight: 'var(--leading-relaxed, 1.75)' }],
        sm: ['var(--text-sm, 0.875rem)', { lineHeight: 'var(--leading-normal, 1.5)' }],
        base: ['var(--text-base, 1rem)', { lineHeight: 'var(--leading-normal, 1.5)' }],
        lg: ['var(--text-lg, 1.125rem)', { lineHeight: 'var(--leading-normal, 1.5)' }],
        xl: ['var(--text-xl, 1.25rem)', { lineHeight: 'var(--leading-tight, 1.2)' }],
        '2xl': ['var(--text-2xl, 1.5rem)', { lineHeight: 'var(--leading-tight, 1.2)' }],
        '3xl': ['var(--text-3xl, 1.875rem)', { lineHeight: 'var(--leading-tight, 1.2)' }],
        '4xl': ['var(--text-4xl, 2.25rem)', { lineHeight: 'var(--leading-tight, 1.2)' }],
      },
      fontWeight: {
        normal: 'var(--font-normal, 400)',
        medium: 'var(--font-medium, 500)',
        semibold: 'var(--font-semibold, 600)',
        bold: 'var(--font-bold, 700)',
      },
      borderRadius: {
        xs: 'var(--radius-xs, 0.25rem)',
        sm: 'var(--radius-sm, 0.5rem)',
        md: 'var(--radius-md, 0.75rem)',
        lg: 'var(--radius-lg, 1rem)',
        xl: 'var(--radius-xl, 1.25rem)',
        '2xl': 'var(--radius-2xl, 1.5rem)',
        full: 'var(--radius-full, 9999px)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05))',
        md: 'var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))',
        lg: 'var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1))',
        xl: 'var(--shadow-xl, 0 24px 60px rgba(15, 23, 42, 0.95))',
        focus: 'var(--shadow-focus, 0 0 0 1px rgba(51, 92, 255, 0.4))',
        hover: 'var(--shadow-hover, 0 20px 40px rgba(15, 23, 42, 0.85))',
        primary: 'var(--shadow-primary, 0 12px 30px rgba(51, 92, 255, 0.35))',
      },
      spacing: {
        xxs: 'var(--space-xxs, 0.25rem)',
        xs: 'var(--space-xs, 0.5rem)',
        sm: 'var(--space-sm, 0.75rem)',
        md: 'var(--space-md, 1rem)',
        lg: 'var(--space-lg, 1.5rem)',
        xl: 'var(--space-xl, 2rem)',
        '2xl': 'var(--space-2xl, 2.5rem)',
        '3xl': 'var(--space-3xl, 4rem)',
      },
      transitionTimingFunction: {
        standard: 'var(--ease-standard, cubic-bezier(0.22, 0.61, 0.36, 1))',
        spring: 'var(--ease-spring, cubic-bezier(0.16, 1, 0.3, 1))',
        enter: 'var(--ease-enter, cubic-bezier(0, 0, 0.2, 1))',
        exit: 'var(--ease-exit, cubic-bezier(0.4, 0, 1, 1))',
      },
      transitionDuration: {
        fast: 'var(--duration-fast, 120ms)',
        med: 'var(--duration-med, 220ms)',
        slow: 'var(--duration-slow, 340ms)',
        slower: 'var(--duration-slower, 480ms)',
      },
      backdropBlur: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '18px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
