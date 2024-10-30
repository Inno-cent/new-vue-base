/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        generalSans: ['GeneralSans', 'sans-serif'],
        ibmPlex: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
