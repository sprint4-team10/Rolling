import { formatDate } from '../../utils/formatDate';
import Buttons from '../Buttons';
import * as S from './ModalStyled';
import RelationshipBadge from '../RelationshipBadge/RelationshipBadge';

const Modal = ({ openModal, handleClose, profileImageURL, sender, relationship, content, createdAt }) => {
  if (!openModal) {
    return <></>;
  }

  const handleDeemClick = () => {
    handleClose();
  };

  return (
    <>
      <S.Deem onClick={handleDeemClick} />
      <S.Container>
        <S.CardHeader>
          <S.CardProfile profileImageURL={profileImageURL} />
          <div>
            <S.Sender>
              From. <b>{sender}</b>
            </S.Sender>
            <RelationshipBadge relationship={relationship} />
          </div>
          <S.Date>{formatDate(createdAt)}</S.Date>
        </S.CardHeader>
        <S.CardContents dangerouslySetInnerHTML={{ __html: content }} />
        <S.CardFooter>
          <div onClick={handleClose}>
            <Buttons buttonType="Primary40">확인</Buttons>
          </div>
        </S.CardFooter>
      </S.Container>
    </>
  );
};

export default Modal;
