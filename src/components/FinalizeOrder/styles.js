import styled from 'styled-components';
import Colors from 'styles/Colors';
import { darken } from 'polished';

const Button = styled.button`
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-weight: bold;
  color: white;
  background-color: ${Colors.purples.dark1};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${darken(0.3, Colors.purples.dark1)};
  }
`;

export default Button;
