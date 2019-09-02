import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Container, Img } from './styles';
import Themes from './themes';

function ProductAvatar({ theme, src, alt }) {
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Container>
        <Img src={src} alt={alt} />
      </Container>
    </ThemeProvider>
  );
}

ProductAvatar.propTypes = {
  theme: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductAvatar;
