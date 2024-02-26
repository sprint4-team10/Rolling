import styled from 'styled-components';
import PopOver from '../PopOver';
import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { getReactions } from '../../api/api';
import Reaction from '../Reaction';
import { useParams } from 'react-router-dom';

const ReactionsPopOver = forwardRef(({ isOpen, style, update }, ref) => {
  const { id } = useParams();
  const [reactions, setReactions] = useState([]);

  const handleLoadReactions = async (options) => {
    const data = await getReactions(options);
    setReactions(data.results);
  };

  useEffect(() => {
    handleLoadReactions({ id });
  }, [id, update]);

  return (
    <PopOver popOverRef={ref} isOpen={isOpen} style={style}>
      <Container>
        {reactions?.map((reaction) => {
          return <Reaction key={reaction.id} reaction={reaction} />;
        })}
      </Container>
    </PopOver>
  );
});

const Container = styled.div`
  background-color: red;
  position: absolute;
  right: 190px;
  top: 50px;
  width: 60%;

  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 24px;

  display: grid;
  grid-template-columns: repeat(4, minmax(20px, 25%));
  gap: 10px;
  @media (max-width: 960px) {
    left: 0;
  }

  @media (max-width: 568px) {
    width: 60%;
  }

  @media (max-width: 410px) {
    width: 70%;
  }
`;

export default ReactionsPopOver;
