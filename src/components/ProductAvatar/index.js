import React from 'react';
import PropTypes from 'prop-types';

import Img from './styles';

function ProductAvatar({ src, alt }) {
  return <Img src={src} alt={alt} />;
}

ProductAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductAvatar;
