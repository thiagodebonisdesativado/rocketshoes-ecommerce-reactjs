import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

function CartAmount({ amount }) {
  return (
    <Container>
      <strong>Meu carrinho </strong>
      <small>{amount < 1 ? `${amount} item` : `${amount} items`}</small>
    </Container>
  );
}

CartAmount.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default CartAmount;
