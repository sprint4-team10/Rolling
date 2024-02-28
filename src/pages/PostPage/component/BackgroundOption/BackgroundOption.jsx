import styled from 'styled-components';
import COLORS from '../../../../utils/colors';
import { COLOR_OPTION } from './constant';
import { getBackgroundImageURL } from '../../../../api/getBackgroundImageURL';
import { useEffect, useState } from 'react';

const BackgroundOption = ({ backgroundType }) => {
  const [backgroundImgData, setBackgroundImgData] = useState();

  const handleLoadBackgroundImgURL = async () => {
    const data = await getBackgroundImageURL();
    setBackgroundImgData(data.imageUrls);
  };

  useEffect(() => {
    handleLoadBackgroundImgURL();
  }, []);

  switch (backgroundType) {
    case 'color':
      return (
        <ColorBoxContainer>
          {COLOR_OPTION.map((color) => (
            <BackgroundColor backgroundColor={color} key={color} />
          ))}
        </ColorBoxContainer>
      );
    case 'image':
      return (
        <ImageBoxContainer>
          {backgroundImgData.map((url) => (
            <BackgroundImage backgroundImageURL={url} key={url.indexOf} />
          ))}
        </ImageBoxContainer>
      );
    default:
      return;
  }
};

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

const ImageBoxContainer = styled(ColorBoxContainer)``;

export const BackgroundOptionBox = styled.div`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
`;

export const BackgroundColor = styled(BackgroundOptionBox)`
  background-color: ${({ backgroundColor }) => COLORS[backgroundColor]};
`;

export const BackgroundImage = styled(BackgroundOptionBox)`
  background-image: url(${(props) => props.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
`;
export default BackgroundOption;
