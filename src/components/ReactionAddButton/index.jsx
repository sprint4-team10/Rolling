import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import unionImg from '../../assets/icons/Union.svg';
import COLORS from '../../utils/colors';
import { useParams } from 'react-router-dom';
import { createReaction } from '../../api/api';
import { usePopOver } from '../../hooks/usePopOver';

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
      <AddBtn onClick={handleReactionAdd}>
        <img src={unionImg} alt="personIcon" />
        추가
      </AddBtn>
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

const AddBtn = styled.button`
  border: 1px solid ${COLORS.gray300};
  padding: 6px 16px;
  display: flex;
  font-size: 1.6rem;
  gap: 5px;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
  @media (max-width: 960px) {
    padding: 3px 8px;
    font-size: 1.2rem;
  }
`;

export default ReactionAddButton;
