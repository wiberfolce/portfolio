/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0F1E',
          900: '#0E1526',
          800: '#151E33',
          700: '#212C47',
          600: '#39456A',
          500: '#5A6690',
        },
        paper: '#FAFAFC',
        mist: '#EEF0F6',
        line: '#E2E5EF',
        violet: {
          500: '#6C5CE7',
          600: '#5A46E0',
          400: '#8B7DF0',
        },
        teal: {
          500: '#1FC8A9',
          400: '#4EDCC0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 15, 30, 0.04), 0 8px 24px -12px rgba(10, 15, 30, 0.12)',
        card: '0 1px 1px rgba(10, 15, 30, 0.03), 0 2px 8px rgba(10, 15, 30, 0.06)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
