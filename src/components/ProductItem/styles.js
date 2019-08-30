import styled from 'styled-components';

export const Item = styled.li`
  width: 18rem;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  color: initial;
  background-color: white;
  border-radius: 4px;
`;

export const Description = styled.h4`
  width: auto;
  height: 75px;
  margin: 1rem 0.6rem 1rem 0.6rem;
  text-align: justify;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.strong`
  margin: 0.6rem 0.6rem 1rem 0.6rem;
  font-size: 1.2rem;
`;
