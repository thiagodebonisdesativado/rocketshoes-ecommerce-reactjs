import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProduct } from 'store/modules/Product/actions';
import { getCart } from 'store/modules/Cart/actions';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { Header, ProductList, LoadingSpinner } from 'components';

class Home extends Component {
  componentDidMount() {
    this.props.getProduct();
    this.props.getCart();
  }

  render() {
    return (
      <>
        <GlobalStyle isLoading={this.props.loading} />
        <Header />
        <Section isLoading={this.props.loading}>
          {this.props.loading && <LoadingSpinner theme="large" />}
          {!this.props.loading && <ProductList />}
        </Section>
      </>
    );
  }
}

Home.propTypes = {
  getProduct: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ ProductReducer }) => ({
  loading: ProductReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProduct, getCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
