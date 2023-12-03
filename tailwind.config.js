/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#313131',
      },
      backgroundImage: {
        'gradient-sides': 'linear-gradient(0deg, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.95) 85%)',
        'gradient-radial': 'radial-gradient(circle, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0) 75%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
