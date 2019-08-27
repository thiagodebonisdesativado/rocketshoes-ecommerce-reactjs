import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Breakpoints.lg`width: 30%;`}
`;

export const Price = styled.strong`
  display: none;
  margin-top: 0.4rem;

  ${Breakpoints.lg`display: block;`}
`;
