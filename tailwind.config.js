/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        light: '0 45px 70px -15px rgba(1, 1, 1, 1)',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'bg-dark': '#0B0C10',
        bg: '#1F2833',
        primary: '#66FCF1',
        secondary: '#FC6671',
        green: '#45A29E',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        projectin: {
          '0%': {
            top: '-100%',
            transform: `scaleY(0.5)`,
          },
          '100%': {
            top: '0',
            transform: `scaleY(1)`,
          },
        },
        projectout: {
          '0%': {
            top: '0',
            transform: `scaleY(1)`,
          },
          '-100%': {
            top: '-100%',
            transform: `scaleY(0.2)`,
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        projectin: 'projectin 0.7s ease-in-out forwards',
        projectout: 'projectout 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
