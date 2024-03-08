import plusImg from '../../../../assets/icons/plus.svg';
import { useCallback, useEffect, useState } from 'react';
import { getMessages } from '../../../../api/api';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useHandleDeleteMessage } from '../../../../hooks/useHandleDeleteMessage';
import AddButton from '../../../../components/Buttons/AddButton/AddButton';
import * as S from './CardListStyled';
import Card from '../Card';

const OFFSET = 8;

const CardList = () => {
  const { id } = useParams();
  const { filteredIds } = useHandleDeleteMessage();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(true);
  const { pathname } = useLocation();

  const handleLoadMessages = useCallback(
    async (options) => {
      if (!next) {
        return;
      }

      try {
        const data = await getMessages(options);
        if (data.next === null) {
          setNext(false);
        }
        if (data.results.length > 0) {
          setMessages([...messages, ...data.results]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [messages, next],
  );

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
  }, [offset, handleLoadMessages, id]);

  return (
    <S.Container>
      {!pathname.includes('edit') && (
        <S.EmptyCard>
          <Link to="message">
            <AddButton>
              <img src={plusImg} alt="plusIcon" />
            </AddButton>
          </Link>
        </S.EmptyCard>
      )}
      {messages.map((message) => {
        if (!filteredIds.includes(message.id)) {
          return (
            <Card
              messageId={message.id}
              profileImageURL={message.profileImageURL}
              sender={message.sender}
              relationship={message.relationship}
              content={message.content}
              createdAt={message.createdAt}
              key={message.id}
            />
          );
        }
      })}
    </S.Container>
  );
};

export default CardList;
