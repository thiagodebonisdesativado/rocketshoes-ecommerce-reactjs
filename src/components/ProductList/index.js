import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as StateManipulation from 'utils/StateManipulation';

import List from './styles';
import { ProductItem } from 'components';

export default function ProductList() {
  const productList = useSelector(
    ({ ProductReducer }) => ProductReducer.productList
  );

  const newProductList = useMemo(() => {
    return productList.map(product => {
      return {
        ...product,
        priceConverted: StateManipulation.convertProductPrice(product.price),
      };
    });
  }, [productList]);

  return (
    <List>
      {newProductList.map(({ id, image, priceConverted, title }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            avatar={image}
            description={title}
            price={priceConverted}
          />
        );
      })}
    </List>
  );
}
