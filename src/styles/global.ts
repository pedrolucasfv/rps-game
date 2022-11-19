import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Barlow Semi Condensed';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/barlow-semi-condensed-v14-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* barlow-semi-condensed-700 - latin */
@font-face {
  font-family: 'Barlow Semi Condensed';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/barlow-semi-condensed-v14-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Barlow Semi Condensed', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
