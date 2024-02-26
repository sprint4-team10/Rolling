import styled from 'styled-components';
import plusImg from '../../../assets/icons/plus.svg';
import { formatDate } from '../../../utils/formatDate';
import { useEffect, useState } from 'react';
import { getMessages } from '../../../api/api';
import { useParams } from 'react-router-dom';
import COLORS from '../../../utils/colors';

const OFFSET = 8;

const CardList = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(true);

  const handleLoadMessages = async (options) => {
    if (!next) {
      return;
    }

    const data = await getMessages(options);
    console.log('messages:', messages);
    if (data.next === null) {
      setNext(false);
    }
    if (data.results.length > 0) {
      setMessages([...messages, ...data.results]);
    }
  };

  useEffect(() => {
    const throttle = (callback, delay) => {
      let timerId;
      return (...args) => {
        if (timerId) return;
        timerId = setTimeout(() => {
          callback(...args);
          timerId = null;
        }, delay);
      };
    };

    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight - 10) {
        setOffset((offset) => offset + OFFSET);
      }
    };

    window.addEventListener('scroll', throttle(handleScroll, 500));

    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleLoadMessages({ id, offset });
  }, [offset]);

  return (
    <Container>
      <EmptyCard>
        <AddButton>
          <img src={plusImg} alt="plusIcon" />
        </AddButton>
      </EmptyCard>
      {messages.map((message) => (
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
    </Container>
  );
};

const Container = styled.div`
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

const AddButton = styled.button`
  background-color: ${COLORS.gray500};
  width: 56px;
  height: 56px;
  border-radius: 50%;
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

export default CardList;
