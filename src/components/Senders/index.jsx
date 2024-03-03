import styled from 'styled-components';
import COLORS from '../../utils/colors';

const Senders = ({ containerStyle, profileListStyle, descriptionStyle, messageCount, messages }) => {
  return (
    <Container style={containerStyle}>
      <ProfileList style={profileListStyle}>
        {messages.map((message) => (
          <Item key={message.id}>
            <img src={message.profileImageURL} alt="profileImg" />
          </Item>
        ))}
        {messageCount > 3 && <Item>+{messageCount - 3}</Item>}
      </ProfileList>
      <Description style={descriptionStyle}>
        <b>{messageCount}</b>명이 작성했어요!
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

const ProfileList = styled.ul`
  display: flex;
`;

const Description = styled.p`
  font-size: 1.8rem;
`;

const Item = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  padding: 1px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    width: auto;
    padding: 0 7px;
    border: 1px solid ${COLORS.gray300};
  }
  &:not(:last-child) {
    margin-right: -10px;
  }
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Senders;
