import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as StateManipulation from 'utils/StateManipulation';

import List from './styles';
import { CartItem } from 'components';

export default function CartList() {
  const cartList = useSelector(({ CartReducer }) => CartReducer.cartList);
  const productList = useSelector(
    ({ ProductReducer }) => ProductReducer.productList
  );

  const newCartList = useMemo(() => {
    return StateManipulation.mergeCartListProps(productList, cartList);
  }, [cartList, productList]);

  return (
    <List>
      {newCartList.map(
        ({ id, image, title, priceConverted, subtotalConverted, amount }) => {
          return (
            <CartItem
              key={id}
              productID={id}
              productAvatar={image}
              title={title}
              priceConverted={priceConverted}
              amount={amount}
              subtotalConverted={subtotalConverted}
            />
          );
        }
      )}
    </List>
  );
}
