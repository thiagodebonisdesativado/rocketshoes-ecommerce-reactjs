import React from 'react';

import Section from './styles';
import { CartList, Footer } from 'components';

export default function Cart() {
  return (
    <Section>
      <CartList />
      <Footer />
    </Section>
  );
}
