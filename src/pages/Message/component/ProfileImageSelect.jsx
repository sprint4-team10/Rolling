import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/Fonts';
import checkIcon from '../../../assets/icons/check.svg';

const profile_images = [
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  'https://picsum.photos/id/522/100/100',
  'https://picsum.photos/id/547/100/100',
  'https://picsum.photos/id/268/100/100',
  'https://picsum.photos/id/1082/100/100',
  'https://picsum.photos/id/571/100/100',
  'https://picsum.photos/id/494/100/100',
  'https://picsum.photos/id/859/100/100',
  'https://picsum.photos/id/437/100/100',
  'https://picsum.photos/id/1064/100/100',
];

export const ProfileImageSelect = ({ onChange, selectedImgUrl }) => {
  const handleProfileImgClick = (imageUrl) => {
    onChange(imageUrl);
  };

  return (
    <Container>
      <PreviewContent>
        <Preview src={selectedImgUrl} />
      </PreviewContent>

      <ImgSelectContent>
        <Title>프로필 이미지를 선택해주세요!</Title>
        <ProfileCandidates>
          {profile_images.map((image, i) => (
            <ImgContainer key={i} onClick={() => handleProfileImgClick(image)}>
              {selectedImgUrl === image && (
                <div>
                  <Deem />
                  <CheckIcon src={checkIcon} alt="checkIcon" />
                </div>
              )}
              <img src={image} alt="profileImg" />
            </ImgContainer>
          ))}
        </ProfileCandidates>
      </ImgSelectContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

const Preview = styled.img``;

const ProfileCandidates = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const Deem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
`;

const CheckIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PreviewContent = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: blue;
  flex-shrink: 0;
  overflow: hidden;
`;

const ImgSelectContent = styled.div``;

const Title = styled.p`
  color: ${COLORS.gray500};
  ${FONTS.font16_Regular}
  margin-bottom: 0.1rem;
`;
