import styled from 'styled-components';
import Colors from 'styles/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: auto;
  text-align: center;
`;

export const Title = styled.small`
  margin-right: 0.5rem;
  color: ${Colors.greys.light2};
`;

export const Price = styled.strong`
  font-size: 1.5rem;
  color: initial;
`;
