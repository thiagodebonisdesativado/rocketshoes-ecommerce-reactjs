import { css } from 'styled-components';

const sizes = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  fullHD: '1920px',
  ultraHD: '3840px',
};

const Breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default Breakpoints;
