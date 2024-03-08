import * as S from './sendersStyled';

const Senders = ({ containerStyle, profileListStyle, descriptionStyle, messageCount, messages }) => {
  return (
    <S.Container style={containerStyle}>
      <S.ProfileList style={profileListStyle}>
        {messages.map((message) => (
          <S.Item key={message.id}>
            <img src={message.profileImageURL} alt="profileImg" />
          </S.Item>
        ))}
        {messageCount > 3 && <S.LastItem>+{messageCount - 3}</S.LastItem>}
      </S.ProfileList>
      <S.Description style={descriptionStyle}>
        <b>{messageCount}</b>명이 작성했어요!
      </S.Description>
    </S.Container>
  );
};

export default Senders;
