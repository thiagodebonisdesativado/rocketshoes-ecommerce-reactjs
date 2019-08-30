import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdDelete } from 'react-icons/md';

import { removeToCart } from 'store/modules/Cart/actions';

import { Container, Button } from './styles';

function RemoveToCart({ productID, removeToCart, loading }) {
  return (
    <Container>
      <Button
        type="button"
        onClick={_ => removeToCart(productID)}
        disabled={loading}
      >
        <MdDelete size={20} />
      </Button>
    </Container>
  );
}

RemoveToCart.propTypes = {
  removeToCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  productID: PropTypes.number.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  loading: CartReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeToCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveToCart);
