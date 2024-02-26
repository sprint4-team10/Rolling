import styled from 'styled-components';
import PaperHeader from './compononts/PaperHeader';
import Layout from '../layout/Layout';
import plusImg from '../assets/icons/plus.svg';
import COLORS from '../utils/colors';
import { formatDate } from '../util/formatDate';
import { useEffect, useState } from 'react';
import { getMessages, getRecipient } from '../api/api';
import { useParams } from 'react-router-dom';

const initial_recipient = {
  id: null,
  name: '',
  backgroundColor: '',
  backgroundImageURL: '',
  createdAt: '',
  messageCount: 0,
  recentMessages: [],
  reactionCount: 0,
  topReactions: [],
};

const Paper = () => {
  const [recipientInfo, setRecipientInfo] = useState(initial_recipient);
  const [messages, setMessages] = useState({});
  const [update, setUpdate] = useState(false);

  const { id } = useParams();

  const handleLoadRecipient = async (options) => {
    const data = await getRecipient(options);
    console.log(data);
    setRecipientInfo(data);
  };

  const handleLoadMessages = async (options) => {
    const data = await getMessages(options);
    setMessages(data);
  };

  useEffect(() => {
    handleLoadRecipient({ id });
    handleLoadMessages({ id });
  }, [update]);

  return (
    <>
      <PaperHeader item={recipientInfo} triggerUpdate={setUpdate} update={update} />
      <PaperContents recipientinfo={recipientInfo}>
        <Layout>
          <Container>
            <CardList>
              <EmptyCard>
                <AddButton>
                  <img src={plusImg} alt="plusIcon" />
                </AddButton>
              </EmptyCard>
              {messages?.results?.map((message) => (
                <MessageCard key={message.id}>
                  <CardHeader>
                    <CardProfile>
                      <img src={message.profileImageURL} alt="profileImg" />
                    </CardProfile>
                    <div>
                      <Sender>
                        From. <b>{message.sender}</b>
                      </Sender>
                      <Relationship>{message.relationship}</Relationship>
                    </div>
                  </CardHeader>
                  <CardContents>{message.content}</CardContents>
                  <CardFooter>{formatDate(message.createdAt)}</CardFooter>
                </MessageCard>
              ))}
            </CardList>
          </Container>
        </Layout>
      </PaperContents>
    </>
  );
};

const PaperContents = styled.div`
  background-color: ${(props) => props.recipientinfo.backgroundColor};
  background-image: url(${(props) => props.recipientinfo.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 80px 0;
`;

const AddButton = styled.button`
  background-color: ${COLORS.gray500};
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 33.33333%));
  gap: 2.4rem;

  @media (max-width: 1184px) {
    grid-template-columns: repeat(2, minmax(30rem, 50%));
    gap: 2rem;
  }

  @media (max-width: 685px) {
    grid-template-columns: repeat(1, minmax(30rem, 100%));
    gap: 1.6rem;
  }
`;

const Card = styled.div`
  height: 280px;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
`;
const EmptyCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.gray200};
`;
const CardContents = styled.div`
  padding: 20px 0 10px;
  color: ${COLORS.gray600};
  font-size: 1.8rem;
  font-weight: 400;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;
const CardFooter = styled.div`
  color: ${COLORS.gray400};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 10px;
`;
const CardProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Relationship = styled.span`
  font-size: 1.4rem;
  color: ${COLORS.blue500};
  background-color: ${COLORS.blue100};
  padding: 1px 8px;
  border-radius: 4px;
`;
const Sender = styled.p`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export default Paper;
