import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.container.width};
  height: ${({ theme }) => theme.container.height};
  background-color: white;
`;

export const Img = styled.img`
  max-width: ${({ theme }) => theme.img.maxWidth};
  height: ${({ theme }) => theme.img.height};
  margin: ${({ theme }) => theme.img.margin};
`;
