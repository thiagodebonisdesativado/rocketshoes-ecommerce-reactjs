import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from 'store/modules/Cart/actions';
import { Button, Container } from './styles';
import { ProductAmount, LoadingSpinner } from 'components';

function AddToCart({ productID }) {
  const dispatchRedux = useDispatch();
  const cartIsLoading = useSelector(({ CartReducer }) => CartReducer.loading);

  return (
    <Button
      id={productID}
      type="button"
      onClick={_ => dispatchRedux(CartActions.addToCart(productID))}
      disabled={cartIsLoading}
    >
      <ProductAmount productID={productID} />
      <Container>
        {cartIsLoading && <LoadingSpinner />}
        {!cartIsLoading && 'ADICIONAR AO CARRINHO'}
      </Container>
    </Button>
  );
}

AddToCart.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default AddToCart;
