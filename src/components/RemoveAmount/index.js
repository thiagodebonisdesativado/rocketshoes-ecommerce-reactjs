import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';

import Button from './styles';

export default function RemoveAmount() {
  return (
    <Button type="button">
      <MdRemoveCircleOutline size={20} />
    </Button>
  );
}
