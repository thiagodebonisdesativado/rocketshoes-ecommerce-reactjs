import React from 'react';

import { Item, Avatar, Description, Value } from './styles';
import { AddToCart } from 'components';

export default function ProductItem({ avatar, alt, description, value }) {
  return (
    <Item>
      <Avatar src={avatar} alt={alt} />
      <Description>{description}</Description>
      <Value>{value}</Value>
      <AddToCart />
    </Item>
  );
}
