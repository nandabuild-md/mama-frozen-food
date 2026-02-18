import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          primary: '#0D5C3A',
          secondary: '#1A7A4A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          soft: '#F0D080',
        },
        cream: '#FFFBF0',
        charcoal: '#1C2B20',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
