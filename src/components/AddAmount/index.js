import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import Button from './styles';

export default function AddAmount() {
  return (
    <Button type="button">
      <MdAddCircleOutline size={20} />
    </Button>
  );
}
