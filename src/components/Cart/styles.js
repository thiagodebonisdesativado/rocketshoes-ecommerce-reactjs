import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from 'styles/Colors';
import { darken } from 'polished';
import Breakpoints from 'utils/Breakpoints';

export const AmountMobile = styled.strong`
  position: absolute;
  margin-top: 0.3rem;
  font-size: 0.7rem;
  color: ${Colors.purples.dark1};
  background-color: white;

  ${Breakpoints.xs`display: block;`}
  ${Breakpoints.sm`display: none;`}
`;

export const Hyperlink = styled(NavLink)`
  display: flex;
  color: inherit;

  &:hover {
    color: ${darken(0.2, 'white')};

    ${AmountMobile} {
      background-color: ${darken(0.2, 'white')} !important;
    }

    svg {
      color: ${darken(0.2, 'white')} !important;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
