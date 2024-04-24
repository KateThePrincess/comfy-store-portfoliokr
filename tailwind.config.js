/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: '#24285c',
          'primary-content': '#fff',
          secondary: '#f77198',
          'secondary-content': '#fff',
          accent: '#8390FA',
          'accent-content': '#fff',
          neutral: '#8390FA',
          'neutral-content': '#fff',
          'base-100': '#ffffff',
          'base-200': '#f3f4ff',
          'base-content': '#000000',
          info: '#000000',
          'info-content': '#000000',
          '--rounded-btn': '2rem',
        },
      },
      {
        myDark: {
          primary: '#24285c',
          'primary-content': '#fff',
          secondary: '#f77198',
          'secondary-content': '#fff',
          accent: '#7c89ee',
          'accent-content': '#fff',
          neutral: '#7c89ee',
          'neutral-content': '#fff',
          'base-200': '#191a32',
          'base-100': '#1f213e',
          'base-content': '#ffffff',
          info: '#fff',
          'info-content': '#000000',
          '--rounded-btn': '2rem',
        },
      },
    ],
    theme: {
      extend: {
        keyframes: {
          shake: {
            '0%, 100%': {
              transform: 'translateX(0)',
            },
            '25%, 75%': {
              transform: 'translateX(5px)',
            },
            '50%': {
              transform: 'translateX(-5px)',
            },
          },
        },
        animation: {
          shake: 'shake 300ms ease-in-out infinite',
        },
      },
    },
  },
};
