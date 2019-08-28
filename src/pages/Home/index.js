import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProductActions from 'store/modules/Product/actions';
import Section from './styles';
import { ProductList } from 'components';

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.getProductRequest();
    console.log(this.state);
  }

  render() {
    return (
      <Section>
        <ProductList />
      </Section>
    );
  }
}

const mapStateToProps = state => ({});

// prettier-ignore
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
