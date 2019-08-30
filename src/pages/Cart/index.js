import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hasProducts } from 'utils/StateManipulation';
import { getProduct } from 'store/modules/Product/actions';
import { getCart } from 'store/modules/Cart/actions';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { Header, CartList, Footer } from 'components';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.getProduct();
  }

  render() {
    return (
      <>
        <GlobalStyle isLoading={false} />
        <Header />
        <Section isLoading={false}>
          {this.props.hasProduct && <Footer />}
          {this.props.hasProduct && <CartList />}
          {this.props.hasProduct && <Footer />}
        </Section>
      </>
    );
  }
}

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  hasProduct: PropTypes.bool.isRequired,
};

const hasProduct = createSelector(
  ({ ProductReducer }) => ProductReducer.productList,
  ({ CartReducer }) => CartReducer.cartList,
  (productList, cartList) => hasProducts(productList, cartList)
);

const mapStateToProps = state => ({
  state: state,
  hasProduct: hasProduct(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProduct, getCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
