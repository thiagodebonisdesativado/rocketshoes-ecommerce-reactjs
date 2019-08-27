import React from 'react';

import Container from './styles';
import { FinalizeOrder, PriceTotal } from 'components';

export default function Footer() {
  return (
    <Container>
      <FinalizeOrder />
      <PriceTotal />
    </Container>
  );
}
