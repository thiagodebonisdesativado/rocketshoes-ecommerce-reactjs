import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { AmountMobile, Hyperlink, CartContainer } from './styles';
import { CartAmount } from 'components';

export default function Cart() {
  const cartList = useSelector(({ CartReducer }) => CartReducer.cartList);
  const cartSize = useMemo(() => cartList.length, [cartList]);

  return (
    <Hyperlink to="/cart">
      <CartAmount amount={cartSize} />
      <CartContainer>
        <AmountMobile>{cartSize}</AmountMobile>
        <MdShoppingBasket size={35} color={'white'} />
      </CartContainer>
    </Hyperlink>
  );
}
