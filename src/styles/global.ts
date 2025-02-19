import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.base.background};
    color: ${(props) => props.theme.base['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`
