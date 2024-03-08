import * as S from './PostInputStyled';

const PostInput = ({ value, onChange, onBlur, isEmptyError }) => {
  return (
    <S.SendToInputContainer>
      <S.MainDescription>To.</S.MainDescription>
      <S.InputBox
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <S.ErrorMessage isEmptyError={isEmptyError}>값을 입력해 주세요.</S.ErrorMessage>
    </S.SendToInputContainer>
  );
};

export default PostInput;
