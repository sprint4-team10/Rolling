import styled from 'styled-components';

const CardContent = ({ title, peopleNumber }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Profiles>{/* Self-closing empty component */}</Profiles>
        <Number>{peopleNumber}명이 작성했어요!</Number>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding-bottom: 4.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Title = styled.div`
  margin-bottom: 1.2rem;
  overflow: hidden;
  color: var(gray900);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;
`;

const Profiles = styled.div`
  width: 5rem;
  height: 1.75rem;
  margin-bottom: 1.2rem;
`;

const Number = styled.div`
  color: var(gray700, #3a3a3a);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;

export default CardContent;
