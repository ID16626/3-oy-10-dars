module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-1': "url('./images/Image2.png')",
      },
      colors: {
        colorFirst: '#F2CEDA',
        colorSecond: '#D23166',
        colorThird: '#0F0101',
        colorFourth: '#150101',
        colorFifth: '#fafafa',
        colorSixth: '#F2CEDAAA',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      'fredoka-one': ['Fredoka One', 'sans-serif'],
      'hind-madurai': ['Hind Madurai', 'sans-serif'],
    },
  },
  plugins: [],
};
