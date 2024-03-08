import styled from 'styled-components';

export const Container = styled.div`
  background-color: red;
  position: absolute;
  right: 190px;
  top: 50px;
  width: 60%;

  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 24px;

  display: grid;
  grid-template-columns: repeat(4, minmax(20px, 25%));
  gap: 10px;
  @media (max-width: 960px) {
    left: 0;
  }

  @media (max-width: 568px) {
    width: 60%;
  }

  @media (max-width: 410px) {
    width: 70%;
  }
`;
