import Buttons from '../Buttons';
import { deleteMessage, deleteRecipient } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useHandleDeleteMessage } from '../../hooks/useHandleDeleteMessage';
import * as S from './deleteModalStyled';

const DeleteModal = ({ type, messageId, recipientId, openModal, handleClose, children, setFilteredMessageId }) => {
  const navigate = useNavigate();
  const { changeId } = useHandleDeleteMessage();

  if (!openModal) {
    return <></>;
  }

  const handleDeemClick = () => {
    handleClose();
  };

  const handleDeleteClick = async () => {
    if (type === 'message') {
      await deleteMessage({ id: messageId });
      changeId(messageId);
      navigate(`/post/${recipientId}`);
    } else if (type === 'recipient') {
      await deleteRecipient({ id: recipientId });
      navigate('/list');
    }
  };

  return (
    <>
      <S.Deem onClick={handleDeemClick} />
      <S.Container>
        {children}
        <div>
          <Buttons buttonType="Primary40" buttonSize="xsmall" onClick={handleDeleteClick}>
            삭제
          </Buttons>
        </div>
      </S.Container>
    </>
  );
};

export default DeleteModal;
