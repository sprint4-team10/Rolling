import styled from 'styled-components';
import COLORS from '../../styles/colors';

const BACKGROUND_COLOR = {
  beige: 'orange200',
  purple: 'purple200',
  blue: 'blue200',
  green: 'green200',
};

export const PostLayout = styled.form`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: 72rem;
  width: calc(-4.6rem + 100vw);
  margin: 2rem auto;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(4, minmax(100px, auto));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, auto));
  }
`;

export const BackgroundOptionBox = styled.button`
  aspect-ratio: 1;
  border-radius: 1.6rem;
  cursor: pointer;
  position: relative;
`;

export const BackgroundColor = styled(BackgroundOptionBox)`
  background-color: ${({ $backgroundColor }) => COLORS[BACKGROUND_COLOR[$backgroundColor]]};
`;

export const BackgroundImage = styled(BackgroundOptionBox)`
  background-color: ${COLORS.gray200};
  background-image: url(${(props) => props.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SelectImageCover = styled.div`
  aspect-ratio: 1;
  border-radius: 1.6rem;
  cursor: pointer;
  background-color: white;
  opacity: 0.13;
`;
