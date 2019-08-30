import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import Button from './styles';

function RemoveToCart({ productID }) {
  return (
    <Button type="button">
      <MdDelete size={20} />
    </Button>
  );
}

RemoveToCart.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default RemoveToCart;
