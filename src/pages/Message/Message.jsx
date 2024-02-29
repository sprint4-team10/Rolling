import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import { PostInput, ProfileImageSelect, RelationshipSelect, EnterContent, FontSelect } from './component';
import Buttons from '../../components/Buttons';
import { postMessage } from '../../api/api';

const PostMessagesData = {
  sender: '', // 보낸이 이름
  profileImageURL: 'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg', // 프로필 이미지 URL
  relationship: '', // 관계
  content: '', // 내용
  font: '', // 기본 폰트
};

const Message = () => {
  const [messageData, setMessageData] = useState(PostMessagesData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postMessage(messageData);
      console.log('메세지 데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      throw new Error('메시지 데이터 전송을 실패하였습니다.');
    }
  };

  const handleChange = (value) => {
    setMessageData((prevData) => ({
      ...prevData,
      sender: value,
    }));
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <Title>From.</Title>
        <PostInput onChange={handleChange} />
      </div>

      <div>
        <Title>프로필 이미지</Title>
        <ProfileImageSelect />
      </div>

      <div>
        <Title>상대와의 관계</Title>
        <RelationshipSelect onChange={handleChange} setMessageData={setMessageData} />
      </div>

      <div>
        <Title>내용을 입력해주세요</Title>
        <EnterContent />
      </div>

      <div>
        <Title>폰트 선택</Title>
        <FontSelect onChange={handleChange} />
      </div>

      <Buttons buttonType="Primary56" buttonSize="large" type="text">
        생성하기
      </Buttons>
    </Container>
  );
};

export default Message;

const Container = styled.form`
  max-width: 72rem;
  padding: 5rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 5rem;
`;

const Title = styled.h2`
  margin-bottom: 1.2rem;
  ${FONTS.font24_Bold}
  ${COLORS.gray900}
`;
