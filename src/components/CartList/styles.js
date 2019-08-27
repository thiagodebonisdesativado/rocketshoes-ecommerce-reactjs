import styled from 'styled-components';
import Breakpoints from 'utils/Breakpoints';

const List = styled.ul`
  background-color: white;
  border-radius: 4px;

  ${Breakpoints.lg`width: 87%;`}
  ${Breakpoints.xl`width: 89%;`}
`;

export default List;
