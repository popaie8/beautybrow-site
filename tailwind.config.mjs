/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': '#ADA58B',
        'accent-dark': '#8B8371',
        'accent-light': '#C4BCA8',
        'text-muted': '#6B7280',
        'bg-muted': '#F9FAFB',
        'border-light': '#E5E7EB',
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'Shippori Mincho', 'serif'],
        'sans': ['Noto Sans JP', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'container': '1120px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        'wider-ja': '0.1em',
      },
    },
  },
  plugins: [],
}