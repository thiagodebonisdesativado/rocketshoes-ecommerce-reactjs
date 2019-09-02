import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as StateManipulation from 'utils/StateManipulation';
import * as ProductActions from 'store/modules/Product/actions';
import * as CartActions from 'store/modules/Cart/actions';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { Header, CartList, Footer } from 'components';

export default function Cart() {
  const dispatchRedux = useDispatch();
  const cartList = useSelector(({ CartReducer }) => CartReducer.cartList);
  const productList = useSelector(
    ({ ProductReducer }) => ProductReducer.productList
  );

  const hasProduct = useCallback(() => {
    return StateManipulation.hasProducts(productList, cartList);
  }, [cartList, productList]);

  useEffect(() => {
    dispatchRedux(CartActions.getCart());
    dispatchRedux(ProductActions.getProduct());
  }, [dispatchRedux]);

  return (
    <>
      <GlobalStyle isLoading={false} />
      <Header />
      <Section isLoading={false}>
        {hasProduct() && <Footer />}
        {hasProduct() && <CartList />}
        {hasProduct() && <Footer />}
      </Section>
    </>
  );
}
