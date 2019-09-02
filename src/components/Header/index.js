import React from 'react';

import Container from './styles';
import { Logotype, Cart } from 'components';

export default function Header() {
  return (
    <Container>
      <Logotype />
      <Cart />
    </Container>
  );
}
