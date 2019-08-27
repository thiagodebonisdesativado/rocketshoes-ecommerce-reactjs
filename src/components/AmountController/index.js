import React from 'react';

import Container from './styles';
import { AmountReadOnly, AddAmount, RemoveAmount } from 'components';

export default function AmountController() {
  return (
    <Container>
      <RemoveAmount />
      <AmountReadOnly />
      <AddAmount />
    </Container>
  );
}
