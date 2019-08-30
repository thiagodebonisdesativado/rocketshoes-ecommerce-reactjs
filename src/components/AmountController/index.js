import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';
import { AmountReadOnly, AddAmount, RemoveAmount } from 'components';

function AmountController({ productID, amount }) {
  return (
    <Container>
      <RemoveAmount productID={productID} amount={amount} />
      <AmountReadOnly amount={amount} />
      <AddAmount productID={productID} amount={amount} />
    </Container>
  );
}

AmountController.propTypes = {
  productID: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default AmountController;
