/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        colors: {
            main: '#7A3DA9',
            networkerMain: '#2D27FF',
            fadedMain: '#7a3da91a',
            white: '#FFFFFF',
            eggShell: '#F9F9F9',
            black: 'rgb(34, 34, 34)',
            dark: '#222222',
            blackA015: 'rgba(0, 0, 0, 0.15)',
            blackA025: 'rgba(0, 0, 0, 0.25)',
            grey: '#EBEBEB',
            borderColorGrey: '#EBEEF4',
            fadedText: '#767676',
            fadedText2: '#D1D1D1',
            fadedText3: '#6D7691',
            fadedBg: '#EDEDED',
            mainGradient1: '#7A3DA9',
            mainGradient2: '#1B00C3',
            secondaryGradient1: '#8534B9',
            secondaryGradient2: '#2D27FF',
            preferenceButtonGradient: '#5E2BB1',
            shuffleGradient1: '#8534B926',
            shuffleGradient2: '#2D27FF26',
            fadedText15: '#D1D1D126',
            error: '#d32f2f',
            validation: '#EA1E1E',
            shadowColor: '#7B7A72',
            softBlackColor: '#282828',
            facebookBlue: '#1778F2',
            greyShade: '#727272',
            softGrey: '#C4C4C4',
            softWhite: '#DCDCDC',
            darkBlue: '#1F2F46',
            online: '#00BE13',
            redAlert: '#ED254E',
            romanSilver: '#868DA1',
            lightSilver: '#ECECEC',
            darkSilver: '#3A3A3A',
            redOrange: '#EB5757',
        },
        fontSize: {
            xs: '.75rem',
            b: '0.813',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            h2: '2.5rem',
            '5xl': '3rem',
            h1: '3.063rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
      
            '3xl': '2400px',
            // => @media (min-width: 1536px) { ... }
          },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        styled: true,
        themes: false,
        base: false,
        utils: false,
        logs: false,
        rtl: false,
        prefix: '',
        darkTheme: '',
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
