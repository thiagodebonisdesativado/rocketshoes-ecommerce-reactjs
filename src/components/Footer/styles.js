import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

const Container = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  background-color: white;

  ${Breakpoints.xs`
    flex-direction: column-reverse;

      div {
        margin-bottom: 1rem;
      }
  `}

  ${Breakpoints.sm`
    flex-direction: row;

    div {
      margin-bottom: 0;
    }
  `}
`;

export default Container;
