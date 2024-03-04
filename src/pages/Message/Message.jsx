import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postMessage } from '../../api/api';
import Layout from '../../layout/Layout';
import PostInput from './component/PostInput';
import ProfileImageSelect from './component/ProfileImageSelect';
import RelationshipSelect from './component/RelationshipSelect';
import EnterContent from './component/EnterContent';
import FontSelect from './component/FontSelect';
import Buttons from '../../components/Buttons';
import * as S from './MessageStyled';

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
    <Layout>
      <S.Container onSubmit={handleSubmit}>
        <div>
          <S.Title>From.</S.Title>
          <PostInput onChange={handleChange} />
        </div>

        <div>
          <S.Title>프로필 이미지</S.Title>
          <ProfileImageSelect onChange={handleProfileChange} selectedImgUrl={messageData.profileImageURL} />
        </div>

        <div>
          <S.Title>상대와의 관계</S.Title>
          <RelationshipSelect onChange={handleChange} setMessageData={setMessageData} messageData={messageData} />
        </div>

        <S.EnterContentWrapper>
          <S.Title>내용을 입력해주세요</S.Title>
          <EnterContent setMessageData={setMessageData} />
        </S.EnterContentWrapper>

        <div>
          <S.Title>폰트 선택</S.Title>
          <FontSelect onChange={handleChange} setMessageData={setMessageData} messageData={messageData} />
        </div>

        <Buttons buttonType="Primary56" buttonSize="large" type="text">
          생성하기
        </Buttons>
      </S.Container>
    </Layout>
  );
};

export default Message;
