import styled from 'styled-components';
import PaperHeader from './components/PaperHeader';
import Layout from '../../layout/Layout';
import { useEffect, useState } from 'react';
import { getRecipient } from '../../api/api';
import { Link, useLocation, useParams } from 'react-router-dom';
import CardList from './components/CardList';
import Buttons from '../../components/Buttons';
import { useModal } from '../../hooks/useModal';
import { ModalPortal } from '../../components/Portal';
import DeleteModal from '../../components/deleteModal';
import COLORS from '../../utils/colors';
import { Helmet } from 'react-helmet-async';

const initial_recipient = {
  id: null,
  name: '',
  backgroundColor: '',
  backgroundImageURL: '',
  createdAt: '',
  messageCount: 0,
  recentMessages: [],
  reactionCount: 0,
  topReactions: [],
};

const bgColor = {
  beige: COLORS.orange200,
  purple: COLORS.purple200,
  blue: COLORS.blue200,
  green: COLORS.green200,
};

const Paper = () => {
  const [recipientInfo, setRecipientInfo] = useState(initial_recipient);
  const [update, setUpdate] = useState(false);
  const { openModal, handleClose, handleOpen } = useModal();
  const { pathname } = useLocation();
  const { id } = useParams();

  const handleLoadRecipient = async (options) => {
    try {
      const data = await getRecipient(options);
      setRecipientInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = () => {
    handleOpen();
  };

  useEffect(() => {
    handleLoadRecipient({ id });
  }, [update]);

  return (
    <>
      <Helmet>
        <title>{pathname.includes('edit') ? 'Rolling 편집하기' : 'Rolling 메시지'}</title>
      </Helmet>
      <ModalPortal>
        <DeleteModal type="recipient" recipientId={id} openModal={openModal} handleClose={handleClose}>
          정말 롤링페이퍼를 삭제하시겠어요?
        </DeleteModal>
      </ModalPortal>
      <PaperHeader item={recipientInfo} triggerUpdate={setUpdate} update={update} />
      <PaperContents recipientinfo={recipientInfo}>
        <Cover src={recipientInfo.backgroundImageURL} alt="coverImg" />
        <Layout>
          <Container>
            <div style={{ marginBottom: '10px', marginLeft: 'auto', width: 'fit-content' }}>
              {pathname.includes('edit') ? (
                <Buttons onClick={handleDeleteClick} buttonType="Primary40" buttonSize="xsmall" mobileButtonSize="full">
                  삭제하기
                </Buttons>
              ) : (
                <Link to="edit">
                  <Buttons buttonType="Outlined40" buttonSize="small">
                    편집하기
                  </Buttons>
                </Link>
              )}
            </div>
            <CardList />
          </Container>
        </Layout>
      </PaperContents>
    </>
  );
};

const Cover = styled.img`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  // top: 140px;
  top: 0;
`;

const PaperContents = styled.div`
  background-color: ${(props) => bgColor[props.recipientinfo.backgroundColor]};
  min-height: 100vh;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 0;
`;

export default Paper;
