import React from 'react';
import { useSelector } from 'react-redux';

import Button from './styles';

export default function FinalizeOrder() {
  const cartIsLoading = useSelector(({ CartReducer }) => CartReducer.loading);

  return (
    <Button type="button" disabled={cartIsLoading}>
      FINALIZAR PEDIDO
    </Button>
  );
}
