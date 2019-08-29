import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { AmountMobile, Hyperlink, CartContainer } from './styles';
import { CartAmount } from 'components';

function Cart({ amount }) {
  return (
    <Hyperlink to="/cart">
      <CartAmount amount={amount} />

      <CartContainer>
        <AmountMobile>{amount}</AmountMobile>
        <MdShoppingBasket size={35} color={'white'} />
      </CartContainer>
    </Hyperlink>
  );
}

Cart.propTypes = {
  amount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  amount: CartReducer.cartList.length,
});

export default connect(mapStateToProps)(Cart);
