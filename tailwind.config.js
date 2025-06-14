/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px 0 rgba(34,197,94,0.6)' },
          '50%': { boxShadow: '0 0 8px 4px rgba(34,197,94,0.4)' },
        },
        pulseCustom: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.3' },
        },
        slideup: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'move-car': {
          '0%': { left: '-120px' },
          '100%': { left: 'calc(100vw + 390px)' },
        },
        'car-to-text': {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(0)' },
        },
        shake: {
          '0%': { transform: 'translateY(-1%)' },
          '100%': { transform: 'translateY(3%)' },
        },
        'trail-line': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-30px)' },
        },
        'road-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(100%)' },
        },
        'idhar-bounce': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '60%': { transform: 'scale(1.3)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'road-move': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
        'smoke': {
          '0%': { opacity: 0.5, transform: 'translateY(0) scale(1)' },
          '50%': { opacity: 0.3, transform: 'translateY(-6px) scale(1.05)' },
          '100%': { opacity: 0, transform: 'translateY(-12px) scale(1.1)' },
        },
        'icon-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow 2s infinite ease-in-out',
        'pulse-custom': 'pulseCustom 3s ease-in-out infinite',
        'slide-up': 'slideup 0.4s ease-out',
        'move-car': 'move-car 6s ease-in-out forwards',
        'car-to-text': 'car-to-text 1.2s ease-out forwards',
        shake: 'shake 0.2s ease-in-out infinite alternate',
        'trail-line1': 'trail-line 0.6s ease-out infinite',
        'trail-line2': 'trail-line 0.8s ease-out infinite',
        'trail-line3': 'trail-line 1s ease-out infinite',
        'road-out': 'road-out 1s ease-in-out forwards',
        'idhar-appear': 'idhar-bounce 0.4s ease-out forwards',
        'move-road': 'road-move 0.3s ease-in-out infinite',
        'smoke-trail': 'smoke 1s ease-out infinite',
        'icon-bounce': 'icon-bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
