import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import RobotoFont from './Fonts';
import Colors from './Colors';
import Background from 'assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${RobotoFont}

  body {
    font: 1rem Roboto, sans-serif;
    overflow: ${({ isLoading }) => (isLoading ? 'hidden' : 'auto')};
    color: ${({ theme }) =>
      theme === 'black' ? 'white' : `${Colors.greys.dark1}`};
    background: ${({ theme }) =>
      theme === 'black'
        ? `${Colors.greys.dark1} url(${Background}) no-repeat center top`
        : 'white'};

    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`;

GlobalStyle.defaultProps = {
  theme: 'black',
};

export default GlobalStyle;
