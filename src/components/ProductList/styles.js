import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

const List = styled.ul`
  display: grid;

  ${Breakpoints.xs`
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);`}

  ${Breakpoints.sm`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  `}

  ${Breakpoints.md`grid-gap: 20px;`}
  ${Breakpoints.lg`grid-template-columns: repeat(3, 1fr);`}
  ${Breakpoints.xl`grid-template-columns: repeat(4, 1fr);`}
`;

export default List;
