import styled from 'styled-components';

const Section = styled.section`
  height: ${({ isLoading }) => (isLoading ? '100vh' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 9rem;
`;

export default Section;
