import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import * as CartActions from 'store/modules/Cart/actions';

import Button from './styles';

function AddAmount({ productID, amount }) {
  const dispatchRedux = useDispatch();
  const cartIsLoading = useSelector(({ CartReducer }) => CartReducer.loading);

  return (
    <Button
      type="button"
      onClick={_ =>
        dispatchRedux(CartActions.updateAmount(productID, amount + 1))
      }
      disabled={cartIsLoading}
    >
      <MdAddCircleOutline size={20} />
    </Button>
  );
}

AddAmount.propTypes = {
  productID: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default AddAmount;
