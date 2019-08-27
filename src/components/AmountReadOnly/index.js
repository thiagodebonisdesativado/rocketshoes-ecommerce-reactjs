import React from 'react';

import Input from './styles';

export default function AmountReadOnly() {
  return <Input type="text" readOnly value={100} />;
}
