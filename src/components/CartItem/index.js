import React from 'react';

import { Item, Subtotal, ButtonContainer } from './styles';
import {
  ProductAvatar,
  ProductDescription,
  AmountController,
  RemoveToCart,
} from 'components';

export default function CartItem() {
  return (
    <Item>
      <ProductAvatar />
      <ProductDescription />
      <AmountController />
      <Subtotal>R$10.200,00</Subtotal>
      <ButtonContainer>
        <RemoveToCart />
      </ButtonContainer>
      {/* <ButtonContainer>
        <RemoveToCart />
      </ButtonContainer> */}
    </Item>
  );
}
