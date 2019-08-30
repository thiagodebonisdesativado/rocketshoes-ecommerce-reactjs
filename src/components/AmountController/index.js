import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';
import { AmountReadOnly, AddAmount, RemoveAmount } from 'components';

function AmountController({ amount }) {
  return (
    <Container>
      <RemoveAmount />
      <AmountReadOnly amount={amount} />
      <AddAmount />
    </Container>
  );
}

AmountController.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default AmountController;
