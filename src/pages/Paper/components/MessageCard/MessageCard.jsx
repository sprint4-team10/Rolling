import Modal from '../../../../components/Modal';
import { ModalPortal } from '../../../../components/Portal';
import { useModal } from '../../../../hooks/useModal';
import { formatDate } from '../../../../utils/formatDate';
import RelationshipBadge from '../../../../components/RelationshipBadge';
import * as S from './MessageCardStyled';

export const MessageCard = ({ profileImageURL, sender, relationship, content, createdAt }) => {
  const { openModal, handleClose, handleOpen } = useModal();

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
      <S.MessageCardContainer>
        <S.CardHeader>
          <S.CardProfile profileImageURL={profileImageURL} />
          <S.SenderInfo>
            <S.Sender>
              From. <b>{sender}</b>
            </S.Sender>
            <RelationshipBadge relationship={relationship} />
          </S.SenderInfo>
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
