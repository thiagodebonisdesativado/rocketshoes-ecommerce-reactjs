import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';
import Colors from 'styles/Colors';

const Hyperlink = styled(NavLink)`
  margin-top: 2rem;
  padding: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${Colors.greens.light1};

  &:hover {
    background-color: ${darken(0.1, `${Colors.greens.light1}`)};
  }
`;

export default Hyperlink;
