module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
     keyframes: {
  'move-car': {
    '0%': { left: '-120px' },
    '30%': { left: '35vw' },
    '60%': { left: '45vw' },
    '100%': { left: 'calc(100vw + 120px)' },
  },
  'car-to-text': {
    '0%': { left: '-190px' },
    '100%': { left: '3vw' },
  },
  shake: {
    '0%': { transform: 'translateY(-1%)' },
    '100%': { transform: 'translateY(3%)' },
  },

  // Motion trail lines
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
},
animation: {
  'move-car': 'move-car 4s ease-in-out forwards',
  'car-to-text': 'car-to-text 2s ease-out forwards',
  shake: 'shake 0.2s ease-in-out infinite alternate',

  // Motion trail lines
  'trail-line1': 'trail-line 0.6s ease-out infinite',
  'trail-line2': 'trail-line 0.8s ease-out infinite',
  'trail-line3': 'trail-line 1s ease-out infinite',

  'road-out': 'road-out 1s ease-in-out forwards',
  'idhar-appear': 'idhar-bounce 0.8s ease-out forwards',
},

    },
  },
  plugins: [],
};
