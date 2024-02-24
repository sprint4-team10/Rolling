import styled from 'styled-components';
import COLORS from '../../../utils/colors';
import arrowDownImg from '../../../assets/icons/arrow_down.svg';
import unionImg from '../../../assets/icons/Union.svg';
import shareImg from '../../../assets/icons/share.svg';
import Layout from '../../../layout/Layout';

const PaperHeader = () => {
  return (
    <Layout>
      <Header>
        <Title>
          <Recipient>To. 김태진</Recipient>
        </Title>
        <Contents>
          <Senders>
            <SendersProfileList>
              <Item>
                <img src="https://img.hankyung.com/photo/202307/BF.34034086.1.jpg" />
              </Item>
              <Item>
                <img src="https://img.hankyung.com/photo/202307/BF.34034086.1.jpg" />
              </Item>
              <Item>
                <img src="https://img.hankyung.com/photo/202307/BF.34034086.1.jpg" />
              </Item>
              <Item>+6</Item>
            </SendersProfileList>
            <SendersDescription>
              <b>23</b>명이 작성했어요!
            </SendersDescription>
          </Senders>
          <Reactions>
            <Reaction>😊 24</Reaction>
            <Reaction>😊 3</Reaction>
            <Reaction>😊 26</Reaction>
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
const Senders = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 2px solid ${COLORS.gray200};
  padding-right: 20px;

  @media (max-width: 960px) {
    display: none;
  }
`;
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
const Reaction = styled.li`
  background-color: ${COLORS.gray400};
  color: #fff;
  padding: 8px 12px;
  border-radius: 32px;
  font-size: 1.6rem;

  @media (max-width: 960px) {
    padding: 4px 8px;
    font-size: 1.2rem;
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

const SendersProfileList = styled.ul`
  display: flex;
`;

const SendersDescription = styled.p`
  font-size: 1.8rem;
`;

const Item = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  padding: 1px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    border: 1px solid ${COLORS.gray300};
  }
  &:not(:last-child) {
    margin-right: -10px;
  }
  img {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

const Share = styled.div`
  padding-left: 20px;
  @media (max-width: 960px) {
    padding-left: 10px;
  }
`;

export default PaperHeader;
