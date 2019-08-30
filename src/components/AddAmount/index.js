import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateAmount } from 'store/modules/Cart/actions';

import Button from './styles';

function AddAmount({ productID, amount, updateAmount, loading }) {
  return (
    <Button
      type="button"
      onClick={_ => updateAmount(productID, amount + 1)}
      disabled={loading}
    >
      <MdAddCircleOutline size={20} />
    </Button>
  );
}

AddAmount.propTypes = {
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
)(AddAmount);
