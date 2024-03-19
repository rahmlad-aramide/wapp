import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: {
          100: '#FFAC6E',
          200: '#FF9D64',
          300: '#FF8F5B',
          400: '#FF8454',
          500: '#EC6E46',
          600: '#BC5838',
          700: '#A54D31',
        },
      },
      backgroundImage: {
        hero: "url('/weather-gif.gif')"
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
