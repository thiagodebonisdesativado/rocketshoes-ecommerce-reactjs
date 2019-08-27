import React from 'react';

import { Button, AmountContainer } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function AddToCart() {
  return (
    <Button type="button">
      <AmountContainer>
        <MdAddShoppingCart size={15} />
        <small>0</small>
      </AmountContainer>
      ADICIONAR AO CARRINHO
    </Button>
  );
}
