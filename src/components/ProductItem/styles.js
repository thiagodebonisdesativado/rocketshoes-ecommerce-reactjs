import styled from 'styled-components';

export const Item = styled.li`
  width: 18rem;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0.7rem 1.2rem 0.7rem;
  color: initial;
  background-color: white;
  border-radius: 4px;
`;

export const Avatar = styled.img`
  max-width: 250px;
  height: auto;
  margin: 0 auto;
`;

export const Description = styled.h4`
  padding: 0 1rem 0 0.5rem;
  text-align: justify;
`;

export const Value = styled.strong`
  margin: 0.4rem 0 1rem 0;
  padding: 0 0.5rem 0 0.5rem;
  font-size: 1.2rem;
`;
