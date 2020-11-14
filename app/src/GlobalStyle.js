import { createGlobalStyle } from 'styled-components';
import Theme from './config/Theme'

const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: #DED8C9; */
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;

    background: 
    /* radial-gradient(
        100% 60% at 50% 45%, 
        rgba(137, 130, 119, 0) 30%, 
        rgba(85, 80, 72, 0.57) 85%, 
        rgba(85, 80, 72, 0.75) 100%
      ),  */
      #DED8C9;
    background-blend-mode: normal, normal;

    font-family: thonglor;
    font-size: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: anugrom;
    font-weight: normal;
  }

  p {
    margin-top: 0;
    margin-bottom: ${Theme.spacing.x2}px;
  }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: ${Theme.spacing.x1}px !important; }
  .mt-2 { margin-top: ${Theme.spacing.x2}px !important; }
  .mt-3 { margin-top: ${Theme.spacing.x3}px !important; }
  .mt-4 { margin-top: ${Theme.spacing.x4}px !important; }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: ${Theme.spacing.x1}px !important; }
  .mb-2 { margin-bottom: ${Theme.spacing.x2}px !important; }
  .mb-3 { margin-bottom: ${Theme.spacing.x3}px !important; }
  .mb-4 { margin-bottom: ${Theme.spacing.x4}px !important; }

  .mr-0 { margin-right: 0; }
  .mr-1 { margin-right: ${Theme.spacing.x1}px !important; }
  .mr-2 { margin-right: ${Theme.spacing.x2}px !important; }
  .mr-3 { margin-right: ${Theme.spacing.x3}px !important; }
  .mr-4 { margin-right: ${Theme.spacing.x4}px !important; }

  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
`;
 
export default GlobalStyle;