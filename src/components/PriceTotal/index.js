import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as StateManipulation from 'utils/StateManipulation';

import { Container, Title, Price } from './styles';

export default function PriceTotal() {
  const cartList = useSelector(({ CartReducer }) => CartReducer.cartList);

  const cartTotalPrice = useMemo(() => {
    return StateManipulation.calculeTotal(cartList);
  }, [cartList]);

  return (
    <Container>
      <Title>TOTAL</Title>
      <Price>{cartTotalPrice}</Price>
    </Container>
  );
}
