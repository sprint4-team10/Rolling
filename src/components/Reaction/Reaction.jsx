import * as S from './ReactionStyled';

const Reaction = ({ reaction, containerStyle }) => {
  return (
    <S.Container style={containerStyle}>
      {reaction.emoji} {reaction.count}
    </S.Container>
  );
};

export default Reaction;
