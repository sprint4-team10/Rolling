import COLORS from '../../styles/colors.js';
import * as S from './BadgeStyled.js';

const Badge = ({ relationship }) => {
  const labelColorMap = {
    가족: { backgroundColor: `${COLORS.green100}`, textColor: `${COLORS.green500}`, label: '가족' },
    지인: { backgroundColor: `${COLORS.purple100}`, textColor: `${COLORS.purple500}`, label: '지인' },
    동료: { backgroundColor: `${COLORS.orange100}`, textColor: `${COLORS.orange500}`, label: '동료' },
    친구: { backgroundColor: `${COLORS.blue100}`, textColor: `${COLORS.blue500}`, label: '친구' },
  };

  const { backgroundColor, textColor, label } = labelColorMap[relationship];
  return (
    <S.BadgeContainer $backgroundColor={backgroundColor} $textColor={textColor}>
      {label}
    </S.BadgeContainer>
  );
};

export default Badge;
