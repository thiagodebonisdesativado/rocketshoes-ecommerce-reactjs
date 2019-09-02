import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline } from 'react-icons/md';

import * as CartActions from 'store/modules/Cart/actions';

import Button from './styles';

function RemoveAmount({ productID, amount }) {
  const dispatchRedux = useDispatch();
  const cartIsLoading = useSelector(({ CartReducer }) => CartReducer.loading);

  return (
    <Button
      type="button"
      onClick={_ =>
        dispatchRedux(CartActions.updateAmount(productID, amount - 1))
      }
      disabled={cartIsLoading}
    >
      <MdRemoveCircleOutline size={20} />
    </Button>
  );
}

RemoveAmount.propTypes = {
  productID: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default RemoveAmount;
