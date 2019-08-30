import React from 'react';
import PropTypes from 'prop-types';

import { Container, Price } from './styles';

function ProductDescription({ description, price }) {
  return (
    <Container>
      <span>{description}</span>
      <Price>{price}</Price>
    </Container>
  );
}

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductDescription;
