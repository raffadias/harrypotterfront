/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        beat: 'beat 1s ease-out infinite',
        fade: 'fadeIn 1s',
        transitionHeight: 'transition',
      },
      keyframes: {
        transitionHeight: {
          transition: 'height 0.3s ease'
        },
        wiggle: {
          '0%, 100%': {transform: 'rotate(-6deg)'},
          '50%' : {transform: 'rotate(6deg)'}
        },
        beat: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%' : {transform: 'scale(1.3)'}
        },
        fadeIn: {
          '0%, 100%' : {transform: 'scale(1)'} 
        }
      },
      fontFamily: {
        aboreto: 'Aboreto'
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }
      },
    },
  },
  plugins: [],
}
