import * as S from './ToggleButtonStyled';

const ToggleButton = ({ isBgType, onClick, leftType, rightType, leftContent, rightContent }) => {
  return (
    <S.ToggleButtons>
      <S.SelectButton isBgType={isBgType === leftType} name={leftType} onClick={onClick} value={isBgType} type="button">
        {leftContent}
      </S.SelectButton>
      <S.SelectButton
        isBgType={isBgType === rightType}
        name={rightType}
        onClick={onClick}
        value={isBgType}
        type="button"
      >
        {rightContent}
      </S.SelectButton>
    </S.ToggleButtons>
  );
};

export default ToggleButton;
