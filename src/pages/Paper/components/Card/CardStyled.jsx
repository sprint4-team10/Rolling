import COLORS from '../../../../utils/colors';
import styled from 'styled-components';

export const MessageCardContainer = styled.div`
  height: 29rem;
  background-color: #fff;
  border-radius: 1.6rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${COLORS.gray200};
`;

export const CardContents = styled.div`
  padding: 2rem 0 1rem;
  color: ${COLORS.gray600};
  font-size: 1.8rem;
  font-weight: 400;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

export const CardFooter = styled.div`
  color: ${COLORS.gray400};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const CardProfile = styled.div`
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

export const Sender = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Btn = styled.button`
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-bottom: 10px;
  color: ${COLORS.gray400};
  &:hover {
    color: ${COLORS.gray500};
  }
`;
