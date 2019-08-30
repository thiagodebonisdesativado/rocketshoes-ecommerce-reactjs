import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { mergeCartListProps } from 'utils/StateManipulation';

import List from './styles';
import { CartItem } from 'components';

function CartList({ cartList }) {
  return (
    <List>
      {cartList.map(({ id, image, title, priceConverted, amount }) => {
        return (
          <CartItem
            key={id}
            productID={id}
            productAvatar={image}
            title={title}
            priceConverted={priceConverted}
            amount={amount}
          />
        );
      })}
    </List>
  );
}

CartList.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      priceConverted: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const addProps = createSelector(
  ({ ProductReducer }) => ProductReducer.productList,
  ({ CartReducer }) => CartReducer.cartList,
  (productList, cartList) => mergeCartListProps(productList, cartList)
);

const mapStateToProps = state => ({
  cartList: addProps(state),
});

export default connect(mapStateToProps)(CartList);
