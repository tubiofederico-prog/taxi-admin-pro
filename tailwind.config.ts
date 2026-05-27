import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#1E1B4B',
        'accent-primary': '#7C3AED',
        'accent-secondary': '#4F46E5',
        success: '#059669',
        warning: '#D97706',
        danger: '#DC2626',
      },
    },
  },
  plugins: [],
} satisfies Config
