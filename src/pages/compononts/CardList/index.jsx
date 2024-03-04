import styled from 'styled-components';
import plusImg from '../../../assets/icons/plus.svg';
import { useEffect, useState } from 'react';
import { getMessages } from '../../../api/api';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MessageCard } from '../MessageCard/MessageCard';
import EditCard from '../EditCard';
import { useHandleDeleteMessage } from '../../../hooks/useHandleDeleteMessage';
import AddButton from '../../../components/Buttons/AddButton/AddButton';

const OFFSET = 8;

const CardList = () => {
  const { id } = useParams();
  const { filteredIds } = useHandleDeleteMessage();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(true);
  const { pathname } = useLocation();

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
      {!pathname.includes('edit') && (
        <EmptyCard>
          <Link to="message">
            <AddButton>
              <img src={plusImg} alt="plusIcon" />
            </AddButton>
          </Link>
        </EmptyCard>
      )}
      {messages.map((message) => {
        if (pathname.includes('edit')) {
          if (!filteredIds.includes(message.id)) {
            return (
              <EditCard
                messageId={message.id}
                profileImageURL={message.profileImageURL}
                sender={message.sender}
                relationship={message.relationship}
                content={message.content}
                createdAt={message.createdAt}
                key={message.id + 'edit'}
              />
            );
          }
        } else {
          if (!filteredIds.includes(message.id)) {
            return (
              <MessageCard
                id={message.id}
                profileImageURL={message.profileImageURL}
                sender={message.sender}
                relationship={message.relationship}
                content={message.content}
                createdAt={message.createdAt}
                key={message.id}
              />
            );
          }
        }
      })}
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
  height: 29rem;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
`;

const EmptyCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardList;
