import React from 'react';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { CartList, Footer } from 'components';

export default function Cart() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <CartList />
        <Footer />
      </Section>
    </>
  );
}
