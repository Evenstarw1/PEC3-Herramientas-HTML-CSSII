/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        colorWhite: '#ffffff',
        colorPurple: '#3739b4',
        colorLightPurple: '#ede8ff',
        colorYellow: '#fc9b0a',
        colorLightYellow: '#ffeed5',
        colorGrey: '#ececec',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"]
      },
      fontSize: {
        xs: '0.5rem',
        s: '0.75rem',
        m: '1rem',
        l: '1.5rem',
        xl: '1.8rem',
        xxl: '2.5rem',
        xxxl: '4rem'
      },
      screens: {
        'sm': '250px',
        'md': '720px',
        'lg': '950px'
      },
      gridTemplateColumns: {
        'columnsLarge': '1fr 1fr 0.6fr 1.4fr',
        'columnsMedium': '1fr 1fr 1fr',
        'columnsSmall': '1fr'
      },
      gridTemplateRows: {
        'rowsLarge': '0.6fr 1.6fr 0.8fr',
        'rowsMedium': '0.5fr 1.4fr 1.1fr',
        'rowsSmall': '0.3fr 0.7fr 1.4fr 0.6fr'
      }
    },
  },
  plugins: [],
}
