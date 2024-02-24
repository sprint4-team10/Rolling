import styled from 'styled-components';
import PaperHeader from './compononts/PaperHeader';
import Layout from '../layout/Layout';
import plusImg from '../assets/icons/plus.svg';
import COLORS from '../utils/colors';

const Paper = () => {
  return (
    <>
      <PaperHeader />
      <PaperContents>
        <Layout>
          <Container>
            <CardList>
              <Card>
                <AddButton>
                  <img src={plusImg} alt="plusIcon" />
                </AddButton>
              </Card>
              {Array(8)
                .fill(0)
                .map((card) => (
                  <Card key={card} />
                ))}
            </CardList>
          </Container>
        </Layout>
      </PaperContents>
    </>
  );
};

const PaperContents = styled.div`
  background-color: #ffe2ad;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 80px 0;
`;

const AddButton = styled.button`
  background-color: ${COLORS.gray500};
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 38.4rem));
  justify-content: space-between;
  gap: 2.8rem;

  @media (max-width: 1184px) {
    grid-template-columns: repeat(2, minmax(30rem, 50%));
    gap: 2rem;
  }

  @media (max-width: 685px) {
    grid-template-columns: repeat(1, minmax(30rem, 100%));
    gap: 1.6rem;
  }
`;

const Card = styled.div`
  height: 280px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Paper;
