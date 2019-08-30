import styled from 'styled-components';
import Colors from 'styles/Colors';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  font-size: 0.75rem;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: auto;
  color: white;
  background-color: ${Colors.purples.dark2};
  border: 0;
  border-radius: 3px;

  &:hover {
    background-color: ${darken(0.2, Colors.purples.dark2)};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${darken(0.2, Colors.purples.dark2)};
  }
`;
