import React from 'react';
import PropTypes from 'prop-types';

import { Item, Description, Price } from './styles';
import { ProductAvatar, AddToCart } from 'components';

function ProductItem({ id, avatar, description, price }) {
  return (
    <Item>
      <ProductAvatar theme="productItem" src={avatar} alt={description} />
      <Description>{description}</Description>
      <Price>{price}</Price>
      <AddToCart productID={id} />
    </Item>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
