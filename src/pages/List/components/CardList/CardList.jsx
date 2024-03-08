import * as S from './CardListStyled';
const CardList = ({ children, slideX }) => {
  return <S.Wrapper slide={slideX}>{children}</S.Wrapper>;
};

export default CardList;
