import styled from 'styled-components';
import COLORS from '../../utils/colors.js';
import FONTS from '../../utils/Fonts.js';

const RelationshipBadge = ({ relationship }) => {
  const labelColorMap = {
    가족: { backgroundColor: `${COLORS.green100}`, textColor: `${COLORS.green500}`, label: '가족' },
    지인: { backgroundColor: `${COLORS.purple100}`, textColor: `${COLORS.purple500}`, label: '지인' },
    동료: { backgroundColor: `${COLORS.orange100}`, textColor: `${COLORS.orange500}`, label: '동료' },
    친구: { backgroundColor: `${COLORS.blue100}`, textColor: `${COLORS.blue500}`, label: '친구' },
  };

  const { backgroundColor, textColor, label } = labelColorMap[relationship];
  return (
    <BadgeContainer backgroundColor={backgroundColor} textColor={textColor}>
      {label}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  ${FONTS.font14_Regular}
  display: inline-flex;
  padding: 0rem 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
`;

export default RelationshipBadge;
