import React from 'react';

import { AmountMobile, Hyperlink, CartContainer } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import { CartAmount } from 'components';

export default function Cart() {
  return (
    <Hyperlink to="/cart">
      <CartAmount />

      <CartContainer>
        <AmountMobile>100</AmountMobile>
        <MdShoppingBasket size={35} color={'white'} />
      </CartContainer>
    </Hyperlink>
  );
}
