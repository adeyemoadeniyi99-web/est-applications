/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // This tells Tailwind to scan all HTML files in the root
    // If you later have JS files with dynamic class names, you might add:
    // "./js/*.js",
  ],
  darkMode: 'class', // Keep this for the dark/light mode toggle
  theme: {
    extend: {
      colors: {
        // Your beautiful blue palette
        'primary-blue': '#2D5BFF',
        'secondary-blue': '#84A7FF',
        'tertiary-blue': '#C3D4FF',

        'gradient-start': '#2D5BFF',
        'gradient-end': '#00C6FF',

        'text-light-primary': '#1A202C',
        'text-dark-primary': '#E2E8F0',
        'text-accent': '#2D5BFF',

        'bg-light': '#F8FAFC',
        'bg-dark': '#0F172A',
        'card-light': '#86bef9ff',
        'card-dark': '#1E293B',
        'border-light': '#3d91ebff',
        'border-dark': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}