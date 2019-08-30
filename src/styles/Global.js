import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import RobotoFont from './Fonts';
import Background from 'assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  ${Reset}
  ${RobotoFont}

  body {
    overflow: ${({ isLoading }) => (isLoading ? 'hidden' : 'auto')};
    font: 1rem Roboto, sans-serif;
    color: white;
    background: #191920 url(${Background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`;
