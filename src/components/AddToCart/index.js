import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from 'store/modules/Cart/actions';
import { Button, Container } from './styles';
import { ProductAmount, LoadingSpinner } from 'components';

function AddToCart({ productID, addToCart, loading }) {
  return (
    <Button
      id={productID}
      type="button"
      onClick={_ => addToCart(productID)}
      disabled={loading}
    >
      <ProductAmount productID={productID} />
      <Container isLoading={loading}>
        {loading && <LoadingSpinner />}
        {!loading && 'ADICIONAR AO CARRINHO'}
      </Container>
    </Button>
  );
}

AddToCart.propTypes = {
  productID: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  loading: CartReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addToCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
