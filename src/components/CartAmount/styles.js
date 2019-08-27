import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

const Container = styled.div`
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;

  ${Breakpoints.xs`display: none;`}
  ${Breakpoints.sm`display: flex;`}
`;

export default Container;
