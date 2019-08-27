import styled from 'styled-components';
import Colors from 'styles/Colors';
import Breakpoints from 'utils/Breakpoints';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: initial;
  border-bottom: 1px ${Colors.greys.light1} solid;

  ${Breakpoints.xs`
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;
    text-align: center;

    div {
      margin: 0.4rem 0 0.4rem 0;
    }
  `}

  ${Breakpoints.lg`
    flex-direction: row;
    padding-bottom: 2rem;
    text-align: initial;

    div {
      margin: 0;
    }
  `}
`;

export const Subtotal = styled.strong`
  ${Breakpoints.xs`margin: 0.4rem 0 0.4rem 0;`}
`;

export const ButtonContainer = styled.div`
  width: 100%;

  ${Breakpoints.lg`width: auto;`}
`;
