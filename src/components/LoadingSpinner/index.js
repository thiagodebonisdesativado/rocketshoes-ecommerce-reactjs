import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import Container from './styles';
import Themes from './themes';

function LoadingSpinner({ theme }) {
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Container>
        <FaSpinner color={'white'} />
      </Container>
    </ThemeProvider>
  );
}

LoadingSpinner.defaultProps = {
  theme: 'small',
};

LoadingSpinner.propTypes = {
  theme: PropTypes.string,
};

export default LoadingSpinner;
