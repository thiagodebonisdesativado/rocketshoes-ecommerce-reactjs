import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import Container from './styles';

function LoadingSpinner({ size }) {
  return (
    <Container>
      <FaSpinner size={size} color={'white'} />
    </Container>
  );
}

LoadingSpinner.defaultProps = {
  size: 15,
};

LoadingSpinner.propTypes = {
  size: PropTypes.number,
};

export default LoadingSpinner;
