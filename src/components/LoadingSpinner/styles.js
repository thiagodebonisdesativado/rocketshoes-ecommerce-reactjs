import styled from 'styled-components';
import { Rotate } from 'styles/Animations';

const Container = styled.div`
  svg {
    font-size: ${({ theme }) => theme.width};
    animation: ${Rotate} 1s infinite linear;
  }
`;

export default Container;
