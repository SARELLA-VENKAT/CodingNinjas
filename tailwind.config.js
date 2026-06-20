/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F66C3B',
          'orange-hover': '#E16824',
          'orange-light': '#FDC7A9',
          'orange-bg': '#FFF1EA',
          dark: '#1A1A2E',
          accent: '#E94560',
        },
        surface: {
          black: '#000000',
          dark: '#141414',
          'dark-2': '#1A1A1A',
          'dark-3': '#1F1F1F',
          'dark-4': '#2D2D2D',
          card: '#1A1A1A',
          light: '#F8F8F8',
          white: '#FFFFFF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#ADADAE',
          muted: '#838485',
          dark: '#141414',
          'dark-secondary': '#5E5F60',
        },
        border: {
          dark: '#2D2D2D',
          light: '#E3E3E3',
        },
        success: '#65B168',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      maxWidth: {
        'site': '976px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-in-out',
        'counter': 'counter 2s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(246, 108, 59, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(246, 108, 59, 0.6)' },
        },
      },
      screens: {
        'xs': '460px',
        'md': '768px',
        'lg': '980px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
