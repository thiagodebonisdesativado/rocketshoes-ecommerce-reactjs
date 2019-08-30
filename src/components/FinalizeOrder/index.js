import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './styles';

function FinalizeOrder({ loading }) {
  return (
    <Button type="button" disabled={loading}>
      FINALIZAR PEDIDO
    </Button>
  );
}

FinalizeOrder.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ CartReducer }) => ({
  loading: CartReducer.loading,
});

export default connect(mapStateToProps)(FinalizeOrder);
