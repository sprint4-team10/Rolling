import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Nav = styled.nav`
  border-bottom: 1px solid ${COLORS.gray200};
  position: relative;
  z-index: 10;
  background-color: ${COLORS.white};
`;

export const Container = styled.div`
  height: 64px;
`;

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
