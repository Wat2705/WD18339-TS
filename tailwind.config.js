module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}', 
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}