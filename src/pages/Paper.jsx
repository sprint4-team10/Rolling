import styled from 'styled-components';
import PaperHeader from './compononts/PaperHeader';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { getRecipient } from '../api/api';
import { Link, useParams } from 'react-router-dom';
import CardList from './compononts/CardList';
import Buttons from '../components/Buttons';

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

  const { id } = useParams();

  const handleLoadRecipient = async (options) => {
    const data = await getRecipient(options);
    console.log(data);
    setRecipientInfo(data);
  };

  useEffect(() => {
    handleLoadRecipient({ id });
  }, [update]);

  return (
    <>
      <PaperHeader item={recipientInfo} triggerUpdate={setUpdate} update={update} />
      <PaperContents recipientinfo={recipientInfo}>
        <Cover src={recipientInfo.backgroundImageURL} alt="coverImg" />
        <Layout>
          <Container>
            <div style={{ marginBottom: '10px', marginLeft: 'auto', width: 'fit-content' }}>
              <Link to="edit">
                <Buttons buttonType="Outlined40" buttonSize="small">
                  편집하기
                </Buttons>
              </Link>
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
  background-color: ${(props) => props.recipientinfo.backgroundColor};
  // background-image: url(${(props) => props.recipientinfo.backgroundImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 0;
`;

export default Paper;
