import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { convertProductPrice } from 'utils/StateManipulation';

import List from './styles';
import { ProductItem } from 'components';

function ProductList({ productList }) {
  return (
    <List>
      {productList.map(({ id, image, priceConverted, title }) => {
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

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceConverted: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const convertPrice = createSelector(
  state => state.productList,
  productList =>
    productList.map(product => {
      return {
        ...product,
        priceConverted: convertProductPrice(product.price),
      };
    })
);

const mapStateToProps = ({ ProductReducer }) => ({
  productList: convertPrice(ProductReducer),
});

export default connect(mapStateToProps)(ProductList);
