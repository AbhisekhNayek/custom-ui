/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('./src/assets/images/background_pattern_mobile.png')",
        'desktop-bg': "url('./src/assets/images/background_pattern_desktop.png')",
      }
    },
  },
  plugins: [],
}

