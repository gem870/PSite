/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(4, 184, 178, 0.5), 0 2px 4px -1px rgba(4, 184, 178, 0.06)',
      },
      backgroundImage: {
        "bg-image-pic": "url('/src/assets/Emmanuel victor.png')",
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out', // 1s duration
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
    },
  },
  plugins: [],
}

