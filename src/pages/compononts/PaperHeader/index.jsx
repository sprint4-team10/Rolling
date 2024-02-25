import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import arrowDownImg from '../../../assets/icons/arrow_down.svg';
import unionImg from '../../../assets/icons/Union.svg';
import shareImg from '../../../assets/icons/share.svg';
import Layout from '../../../layout/Layout';
import Senders from '../../../components/Senders';
import Reaction from '../../../components/Reaction';

const PaperHeader = ({ item }) => {
  return (
    <Layout>
      <Header>
        <Title>
          <Recipient>To. {item.name}</Recipient>
        </Title>
        <Contents>
          {/* senders */}
          <Senders messageCount={item.messageCount} messages={item.recentMessages} />
          <Reactions>
            {item.topReactions.map((reaction) => (
              <Reaction key={reaction.id} reaction={reaction} />
            ))}
            <MoreBtn>
              <img src={arrowDownImg} alt="arrowDownIcon" />
            </MoreBtn>
            <AddBtn>
              <img src={unionImg} alt="personIcon" />
              추가
            </AddBtn>
          </Reactions>
          <Share>
            <ShareBtn>
              <img src={shareImg} alt="shareIcon" />
            </ShareBtn>
          </Share>
        </Contents>
      </Header>
    </Layout>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Title = styled.div`
  font-size: 1.8rem;
`;
const Contents = styled.div`
  display: flex;
`;
const Recipient = styled.h2``;
const Reactions = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 2px solid ${COLORS.gray200};
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 960px) {
    padding-left: 0;
    padding-right: 10px;
    gap: 5px;
  }
`;

const MoreBtn = styled.button`
  display: flex;
`;

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

const ShareBtn = styled(AddBtn)``;

const Share = styled.div`
  padding-left: 20px;
  @media (max-width: 960px) {
    padding-left: 10px;
  }
`;

export default PaperHeader;
