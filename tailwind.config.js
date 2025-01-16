/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'moving-gradient': 'linear-gradient(90deg, #1B91F0, #CFD5DE00, #1B91F0)',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        geistmono: ['Geist', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',

      }
    },
  },
  plugins: [],
}

