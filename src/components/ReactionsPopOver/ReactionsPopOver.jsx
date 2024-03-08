import PopOver from '../PopOver';
import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { getReactions } from '../../api/api';
import Reaction from '../Reaction';
import { useParams } from 'react-router-dom';
import * as S from './ReactionsPopOverStyled';

const ReactionsPopOver = forwardRef(({ isOpen, style, update }, ref) => {
  const { id } = useParams();
  const [reactions, setReactions] = useState([]);

  const handleLoadReactions = async (options) => {
    try {
      const data = await getReactions(options);
      setReactions(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadReactions({ id });
  }, [id, update]);

  return (
    <PopOver popOverRef={ref} isOpen={isOpen} style={style}>
      <S.Container>
        {reactions?.map((reaction) => {
          return <Reaction key={reaction.id} reaction={reaction} />;
        })}
      </S.Container>
    </PopOver>
  );
});

export default ReactionsPopOver;
