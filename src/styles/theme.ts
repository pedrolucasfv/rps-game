export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    scissors: {
      from: 'hsl(39, 89%, 49%)',
      to: 'hsl(40, 84%, 53%)'
    },
    paper: {
      from: 'hsl(230, 89%, 62%)',
      to: 'hsl(230, 89%, 65%)'
    },
    rock: {
      from: 'hsl(349, 71%, 52%)',
      to: 'hsl(349, 70%, 56%)'
    },
    lizard: {
      from: 'hsl(261, 73%, 60%)',
      to: 'hsl(349, 70%, 56%)'
    },
    spock: {
      from: 'hsl(189, 59%, 53%)',
      to: 'hsl(349, 70%, 56%)'
    },

    background: {
      from: 'hsl(214, 47%, 23%)',
      to: 'hsl(237, 49%, 15%)'
    },
    white: '#FAFAFA',
    black: '#030517',
    gray: '#8F8F8F',
    lightGray: '#b3b4c6',
    DarkText: 'hsl(229, 25%, 31%)',
    ScoreText: 'hsl(229, 64%, 46%)',
    HeaderOutline: 'hsl(217, 16%, 45%)',
    deadColor: '#e1e4ed'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
