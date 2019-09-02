import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as ProductActions from 'store/modules/Product/actions';
import * as CartActions from 'store/modules/Cart/actions';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { Header, ProductList, LoadingSpinner } from 'components';

export default function Home() {
  const dispatchRedux = useDispatch();
  const productLoading = useSelector(
    ({ ProductReducer }) => ProductReducer.loading
  );

  useEffect(() => {
    dispatchRedux(ProductActions.getProduct());
    dispatchRedux(CartActions.getCart());
  }, [dispatchRedux]);

  return (
    <>
      <GlobalStyle isLoading={productLoading} />
      <Header />
      <Section isLoading={productLoading}>
        {productLoading && <LoadingSpinner theme="large" />}
        {!productLoading && <ProductList />}
      </Section>
    </>
  );
}
