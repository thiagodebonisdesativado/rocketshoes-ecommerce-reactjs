import styled from 'styled-components';
import Colors from 'styles/Colors';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.7rem;
  background-color: ${Colors.purples.dark3};
  border-radius: 3px;

  svg {
    margin-right: 0.3rem;
  }
`;

export default Container;
