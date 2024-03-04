import { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import { PostInput, ProfileImageSelect, RelationshipSelect, EnterContent, FontSelect } from './component';
import Buttons from '../../components/Buttons';
import { useNavigate, useParams } from 'react-router-dom';
import { postMessage } from '../../api/api';

const PostMessagesData = {
  sender: '', // 보낸이 이름
  profileImageURL:
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png', // 프로필 이미지 URL
  relationship: '', // 관계
  content: '', // 내용
  font: '', // 기본 폰트
};

const Message = () => {
  const [messageData, setMessageData] = useState(PostMessagesData);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(messageData);
    await postMessage({ id, body: { team: 10, recipientId: id, ...messageData } });
    console.log('메세지 데이터가 성공적으로 전송되었습니다.');
    navigate(`/post/${id}`);
  };

  const handleChange = (value) => {
    setMessageData((prevData) => ({
      ...prevData,
      sender: value,
    }));
  };

  const handleProfileChange = (value) => {
    setMessageData((prevData) => ({
      ...prevData,
      profileImageURL: value,
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
        <ProfileImageSelect onChange={handleProfileChange} selectedImgUrl={messageData.profileImageURL} />
      </div>

      <div>
        <Title>상대와의 관계</Title>
        <RelationshipSelect onChange={handleChange} setMessageData={setMessageData} />
      </div>

      <div>
        <Title>내용을 입력해주세요</Title>
        <EnterContent setMessageData={setMessageData} />
      </div>

      <div>
        <Title>폰트 선택</Title>
        <FontSelect onChange={handleChange} setMessageData={setMessageData} />
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
