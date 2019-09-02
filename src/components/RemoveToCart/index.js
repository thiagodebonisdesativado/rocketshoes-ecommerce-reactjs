import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

import * as CartActions from 'store/modules/Cart/actions';

import { Container, Button } from './styles';

function RemoveToCart({ productID }) {
  const dispatchRedux = useDispatch();
  const cartIsLoading = useSelector(({ CartReducer }) => CartReducer.loading);

  return (
    <Container>
      <Button
        type="button"
        onClick={_ => dispatchRedux(CartActions.removeToCart(productID))}
        disabled={cartIsLoading}
      >
        <MdDelete size={20} />
      </Button>
    </Container>
  );
}

RemoveToCart.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default RemoveToCart;
