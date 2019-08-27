import styled from 'styled-components';
import Colors from 'styles/Colors';
import { darken } from 'polished';

export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  background-color: ${Colors.purples.dark3};
  border-radius: 3px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: auto;
  padding-right: 1rem;
  color: white;
  background-color: ${Colors.purples.dark2};
  border: 0;
  border-radius: 3px;

  &:hover {
    background-color: ${darken(0.2, Colors.purples.dark2)};
  }

  svg {
    margin-right: 0.3rem;
  }

  ${AmountContainer} {
    padding: 0.7rem;
  }
`;
