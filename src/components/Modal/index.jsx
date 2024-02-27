import styled from 'styled-components';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import { formatDate } from '../../utils/formatDate';

const Modal = ({ openModal, handleClose, profileImageURL, sender, relationship, content, createdAt }) => {
  if (!openModal) {
    return <></>;
  }

  const handleDeemClick = () => {
    handleClose();
  };

  return (
    <>
      <Deem onClick={handleDeemClick} />
      <Container>
        <CardHeader>
          <CardProfile profileImageURL={profileImageURL} />
          <div>
            <Sender>
              From. <b>{sender}</b>
            </Sender>
            <Relationship>{relationship}</Relationship>
          </div>
          <Date>{formatDate(createdAt)}</Date>
        </CardHeader>
        <CardContents>{content}</CardContents>
        <CardFooter>
          <button onClick={handleClose}>확인</button>
        </CardFooter>
      </Container>
    </>
  );
};

const Deem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 600px;
  height: 476px;
  border-radius: 16px;
  background: ${COLORS.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 40px;
  box-sizing: border-box;

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 630px) {
    width: 400px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${COLORS.gray200};
`;

const CardContents = styled.div`
  padding-top: 20px;
  height: 280px;
  overflow: scroll;
  ${FONTS.font18_Regular}
  &::-webkit-scrollbar {
    height: 0;
    width: 10px;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: ${COLORS.gray300};
    border-radius: 5px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  //   align-items: center;
  padding-top: 10px;
`;

const CardProfile = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 0.1rem solid ${COLORS.gray200};
  background: ${COLORS.white};
  background-image: url(${(props) => props.profileImageURL});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

const Relationship = styled.span`
  font-size: 1.4rem;
  color: ${COLORS.blue500};
  background-color: ${COLORS.blue100};
  padding: 0.1rem 0.8rem;
  border-radius: 0.4rem;
`;

const Sender = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Date = styled.div`
  margin-left: auto;
  color: ${COLORS.gray400};
  ${FONTS.font14_Regular}
`;

export default Modal;
