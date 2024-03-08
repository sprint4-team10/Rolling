import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const ProfileList = styled.ul`
  display: flex;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;

export const Item = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  padding: 1px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: -10px;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LastItem = styled(Item)`
  width: auto;
  padding: 0 7px;
  border: 1px solid ${COLORS.gray300};
`;
