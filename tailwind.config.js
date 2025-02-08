/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },

      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        slideInFromLeftt: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        disappear: {
        '0%': {opacity: '0'},
        '100%' : {opacity: '1'},
        },

      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 3s ease-out',
        slideInFromLeftt: 'slideInFromLeftt 4s ease-out',
        disappear: 'disappear 4s ease-out',
      },
      screens: {
        "2xl": { max: "2095px" },
        // => @media (max-width: 1535px) { ... }

        desk: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lappy: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        tab: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        phone: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        iphone: { max: "400px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}