import styled from 'styled-components';
import previewImg from '../../../assets/icons/person.svg';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/Fonts';

export const ProfileImageSelect = () => {
  return (
    <Container>
      <PreviewContent>
        <Preview src={previewImg} />
      </PreviewContent>

      <ImgSelectContent>
        <Title>프로필 이미지를 선택해주세요!</Title>
      </ImgSelectContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 3.2rem;
`;

const Preview = styled.img``;

const PreviewContent = styled.div`
  border-radius: 10rem;
  background: ${COLORS.gray300};
  padding: 2.4rem;
`;

const ImgSelectContent = styled.div``;

const Title = styled.p`
  color: ${COLORS.gray500};
  ${FONTS.font16_Regular}
`;
