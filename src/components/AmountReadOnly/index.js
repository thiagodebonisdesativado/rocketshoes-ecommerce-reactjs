import React from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

function AmountReadOnly({ amount }) {
  return <Input type="text" readOnly placeholder={amount} />;
}

AmountReadOnly.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default AmountReadOnly;
