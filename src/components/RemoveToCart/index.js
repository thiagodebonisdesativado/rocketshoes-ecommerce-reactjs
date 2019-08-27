import React from 'react';
import { MdDelete } from 'react-icons/md';

import Button from './styles';

export default function RemoveToCart() {
  return (
    <Button type="button">
      <MdDelete size={20} />
    </Button>
  );
}
