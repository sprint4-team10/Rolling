import PaperHeader from './components/PaperHeader';
import Layout from '../../layout/Layout';
import { useEffect, useState } from 'react';
import { getRecipient } from '../../api/api';
import { Link, useLocation, useParams } from 'react-router-dom';
import CardList from './components/CardList';
import Buttons from '../../components/Buttons';
import { useModal } from '../../hooks/useModal';
import { ModalPortal } from '../../components/Portal';
import DeleteModal from '../../components/DeleteModal';

import { Helmet } from 'react-helmet-async';
import * as S from './PaperStyled';

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
  }, [update, id]);

  return (
    <>
      <Helmet>
        <title>{pathname.includes('edit') ? 'Rolling 편집하기' : 'Rolling 롤링페이퍼 목록'}</title>
      </Helmet>
      <ModalPortal>
        <DeleteModal type="recipient" recipientId={id} openModal={openModal} handleClose={handleClose}>
          정말 롤링페이퍼를 삭제하시겠어요?
        </DeleteModal>
      </ModalPortal>
      <PaperHeader item={recipientInfo} triggerUpdate={setUpdate} update={update} />
      <S.PaperContents recipientinfo={recipientInfo}>
        <S.Cover src={recipientInfo.backgroundImageURL} alt="coverImg" />
        <Layout>
          <S.Container>
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
            <CardList triggerUpdate={setUpdate} />
          </S.Container>
        </Layout>
      </S.PaperContents>
    </>
  );
};

export default Paper;
