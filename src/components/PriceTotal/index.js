import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { calculeTotal } from 'utils/StateManipulation';

import { Container, Title, Price } from './styles';

function PriceTotal({ total }) {
  return (
    <Container>
      <Title>TOTAL</Title>
      <Price>{total}</Price>
    </Container>
  );
}

const calculeCartTotal = createSelector(
  ({ CartReducer }) => CartReducer.cartList,
  cartList => calculeTotal(cartList)
);

const mapStateToProps = state => ({
  total: calculeCartTotal(state),
});

export default connect(mapStateToProps)(PriceTotal);
