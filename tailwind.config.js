/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
        sm:'350px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1536px',
    },
    colors :{
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#211b19",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      fontSize: {
        'xs': '0.875rem',    // 14px (was 12px)
        'sm': '1rem',        // 16px (was 14px)
        'base': '1.125rem',  // 18px (was 16px)
        'lg': '1.25rem',     // 20px (was 18px)
        'xl': '1.5rem',      // 24px (was 20px)
        '2xl': '1.875rem',   // 30px (was 24px)
        '3xl': '2.25rem',    // 36px (was 30px)
        '4xl': '3rem',       // 48px (was 36px)
        '5xl': '4rem',       // 64px (was 48px)
        '6xl': '5rem',       // 80px (was 60px)
        '7xl': '6rem',       // 96px (was 72px)
        '8xl': '8rem',       // 128px (was 96px)
        '9xl': '10rem',      // 160px (was 128px)
      },
      boxShadow:{
        cyanShadow: '0px 0px 20px 0px rgba(94,206,220, 0.5)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(94,206,220,0.5)',
        orangeMediumShadow: '10px 10px 200px 150px rgba(240,169,79,0.5)'
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out both',
        slideIn: 'slideIn 1s ease-out both',
        blink: 'blink 1s step-start infinite',
        fadeInOut: 'fadeInOut 2s ease-in-out forwards',
        slide: 'slide 2s ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        blink: { // 🔥 NEW
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '10%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '90%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
        },
      }

    },
    fontFamily:{
      body:['Josefin Sans'],
      special:['Roboto'],
    }
  },
  plugins: [],
}

