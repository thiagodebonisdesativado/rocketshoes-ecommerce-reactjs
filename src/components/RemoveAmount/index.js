import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline } from 'react-icons/md';

import { updateAmount } from 'store/modules/Cart/actions';

import Button from './styles';

function RemoveAmount({ productID, amount, updateAmount, loading }) {
  return (
    <Button
      type="button"
      onClick={_ => updateAmount(productID, amount - 1)}
      disabled={loading}
    >
      <MdRemoveCircleOutline size={20} />
    </Button>
  );
}

RemoveAmount.propTypes = {
  updateAmount: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  productID: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  loading: CartReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateAmount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveAmount);
