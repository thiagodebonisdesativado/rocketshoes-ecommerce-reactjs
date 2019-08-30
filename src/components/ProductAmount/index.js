import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { filterProductAmount } from 'utils/StateManipulation';

import Container from './styles';

function ProductAmount({ productID, amount }) {
  return (
    <Container>
      <MdAddShoppingCart size={15} />
      <small>{amount(productID)}</small>
    </Container>
  );
}

ProductAmount.propTypes = {
  productID: PropTypes.number.isRequired,
  amount: PropTypes.func.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  amount: productID => filterProductAmount(CartReducer.cartList, productID),
});

export default connect(mapStateToProps)(ProductAmount);
