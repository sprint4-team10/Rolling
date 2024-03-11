import TextFields from '../../../../components/TextField/TextFields';
import * as S from './PostInputStyled';

const PostInput = ({ value, onChange, onBlur, isEmptyError, touched }) => {
  return (
    <S.SendToInputContainer>
      <S.MainDescription>To.</S.MainDescription>
      <TextFields
        textFieldType="Input"
        placeholder="받는 사람 이름을 입력해 주세요"
        width="72rem"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $isError={isEmptyError && touched}
      />
      <S.ErrorMessage $isError={isEmptyError && touched}>값을 입력해 주세요.</S.ErrorMessage>
    </S.SendToInputContainer>
  );
};

export default PostInput;
