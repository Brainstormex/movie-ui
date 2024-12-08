/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'corner-gradient': 'radial-gradient(circle, #2b4137 0%, #1d304e 25%, #1a2642 50%, #412f3d 75%, #0c0c0c 100%)',
      },
    },
  },
  plugins: [],
}

