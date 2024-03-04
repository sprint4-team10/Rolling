import EmojiPicker from 'emoji-picker-react';
import unionImg from '../../assets/icons/Union.svg';
import { useParams } from 'react-router-dom';
import { createReaction } from '../../api/api';
import { usePopOver } from '../../hooks/usePopOver';
import * as S from './ReactionAddButtonStyled';

const ReactionAddButton = ({ triggerUpdate }) => {
  const { id } = useParams();
  const { isOpen, ref, handleOpen } = usePopOver();

  const handleReactionAdd = async () => {
    handleOpen();
  };

  const handleEmojiClick = async (emoji) => {
    await createReaction({
      id,
      body: {
        emoji: emoji.emoji,
        type: 'increase',
      },
    });

    triggerUpdate((prevValue) => !prevValue);
  };

  return (
    <>
      <S.AddBtn onClick={handleReactionAdd}>
        <img src={unionImg} alt="personIcon" />
        추가
      </S.AddBtn>
      <div ref={ref}>
        <EmojiPicker
          open={isOpen}
          onEmojiClick={handleEmojiClick}
          style={{ position: 'absolute', top: '50px', right: '100px' }}
        />
      </div>
    </>
  );
};

export default ReactionAddButton;
