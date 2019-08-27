import styled from 'styled-components';
import Colors from 'styles/Colors';
import { darken } from 'polished';

const Button = styled.button`
  color: ${Colors.purples.dark1};
  background-color: transparent;
  border: none;

  &:hover {
    color: ${darken(0.3, Colors.purples.dark1)};
  }
`;

export default Button;
