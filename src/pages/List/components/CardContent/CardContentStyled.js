import styled, { css } from 'styled-components';
import COLORS from '../../../../utils/colors';
import FONTS from '../../../../utils/Fonts';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

export const Title = styled.div`
  margin-bottom: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${FONTS.font24_Bold}

  ${(props) =>
    props.$backgroundImageURL &&
    css`
      color: ${COLORS.white};
    `}

  /* 백그라운드가 이미지가 아닌 경우 */
  ${(props) =>
    !props.$backgroundImageURL &&
    css`
      color: ${COLORS.gray900};
    `}
`;

export const Sender = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.3rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.12);
`;

export const Reactions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;
