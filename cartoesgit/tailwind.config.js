import type { config } from 'tailwindcss'

const config: config = {
  content: ['./src/*/.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin')],
  theme: {
    extend: {
      colors: {
        roxo: '#666CFF',
        cinza: '#282A42'
      }
    }
  }
}

export default config