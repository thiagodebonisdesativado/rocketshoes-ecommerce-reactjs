import React from 'react';
import PropTypes from 'prop-types';

import { Item, Avatar, Description, Value } from './styles';
import { AddToCart } from 'components';

function ProductItem({ id, avatar, description, price }) {
  return (
    <Item>
      <Avatar src={avatar} alt={description} />
      <Description>{description}</Description>
      <Value>{price}</Value>
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
