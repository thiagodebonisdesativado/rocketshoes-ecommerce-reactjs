import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import * as StateManipulation from 'utils/StateManipulation';

import Container from './styles';

function ProductAmount({ productID }) {
  const cartList = useSelector(({ CartReducer }) => CartReducer.cartList);

  const productAmount = useMemo(() => {
    return StateManipulation.filterProductAmount(cartList, productID);
  }, [cartList, productID]);

  return (
    <Container>
      <MdAddShoppingCart size={15} />
      <small>{productAmount}</small>
    </Container>
  );
}

ProductAmount.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default ProductAmount;
