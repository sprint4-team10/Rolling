import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.6rem;
  transform: translateX(${(props) => props.slide}px);
  transition: all 0.5s;
`;
