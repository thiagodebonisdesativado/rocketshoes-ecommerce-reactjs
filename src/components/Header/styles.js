import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

const Container = styled.header`
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${Breakpoints.xs`padding: 1rem;`}
  ${Breakpoints.lg`padding: 1rem 4rem 1rem 4rem;`}
  ${Breakpoints.xl`
    margin-top: 3rem;
    padding: 1rem 4.5rem 1rem 4.5rem;
  `}
`;

export default Container;
