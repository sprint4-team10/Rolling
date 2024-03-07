import Modal from '../../../../components/Modal';
import { ModalPortal } from '../../../../components/Portal';
import { useModal } from '../../../../hooks/useModal';
import { formatDate } from '../../../../utils/formatDate';
import RelationshipBadge from '../../../../components/RelationshipBadge';
import Buttons from '../../../../components/Buttons';
import deleteIcon from '../../../../assets/icons/delete.svg';
import DeleteModal from '../../../../components/deleteModal';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './CardStyled';

const Card = ({ messageId, profileImageURL, sender, relationship, content, createdAt }) => {
  const { openModal, handleClose, handleOpen } = useModal();
  const { openModal: deleteOpenModal, handleClose: deleteHandleClose, handleOpen: deleteHandleOpen } = useModal();

  const { id } = useParams();
  const { pathname } = useLocation();

  const handleDeleteClick = () => {
    deleteHandleOpen();
  };

  return (
    <>
      <ModalPortal>
        <Modal
          openModal={openModal}
          handleClose={handleClose}
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          content={content}
          createdAt={createdAt}
        />
      </ModalPortal>
      <ModalPortal>
        <DeleteModal
          type="message"
          messageId={messageId}
          recipientId={id}
          openModal={deleteOpenModal}
          handleClose={deleteHandleClose}
        >
          정말 메세지를 삭제하시겠어요?
        </DeleteModal>
      </ModalPortal>
      <S.MessageCardContainer>
        <S.CardHeader>
          <S.CardProfile profileImageURL={profileImageURL} />
          <div>
            <S.Sender>
              From. <b>{sender}</b>
            </S.Sender>
            <RelationshipBadge relationship={relationship} />
          </div>
          {pathname.includes('edit') && (
            <div style={{ marginLeft: 'auto' }}>
              <Buttons buttonType="Outlined40" buttonSize="xsmall" onClick={handleDeleteClick}>
                <img src={deleteIcon} alt="deleteIcon" />
              </Buttons>
            </div>
          )}
        </S.CardHeader>
        <S.CardContents dangerouslySetInnerHTML={{ __html: content }} />
        <S.CardFooter>
          <S.Btn onClick={handleOpen}>더보기</S.Btn>
          <div>{formatDate(createdAt)}</div>
        </S.CardFooter>
      </S.MessageCardContainer>
    </>
  );
};

export default Card;
