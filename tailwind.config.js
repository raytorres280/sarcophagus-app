module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors: {
      gray: {
        300: '#9A9A9A',
        400: '#888293',
        500: '#29262F',
        600: '#0C0C0C',
        900: '#060706',
      },
      background: 'rgb(11,11,11)',
      black: 'rgb(0,0,0)',
      green: '#4ECE3D',
      red: '#CA3737',
      white: '#E9E9E9',
      yellow: '#FACA00',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1152px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono'],
      },
      fontSize: {
        '3xs': '0.5rem',     // 8px
        '2xs': '0.625rem',   // 10px
        sm: '0.8125rem',     // 13px
        md: '0.875rem',      // 14px
        lg: '1.25rem'        // 20px
      },
    },
  },
  variants: {},
  plugins: [],
}