/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
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
      },
      animation: {
        'glow-pulse': 'glow 2s infinite ease-in-out',
        'pulse-custom': 'pulseCustom 3s ease-in-out infinite',
        'slide-up': 'slideup 0.4s ease-out',
      },
    }
  },
  plugins: [],
}
