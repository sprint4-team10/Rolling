import styled from 'styled-components';
import BADGE_COLOR from './ColorBadge.js';
import BADGE_COLOR_CONTENT from './ColorBadgeContent.js';

const RelationshipBadge = ({ relationship }) => {
  const labelColorMap = {
    가족: { backgroundColor: 'green', textColor: 'green', label: '가족' },
    지인: { backgroundColor: 'purple', textColor: 'purple', label: '지인' },
    동료: { backgroundColor: 'orange', textColor: 'orange', label: '동료' },
    친구: { backgroundColor: 'blue', textColor: 'blue', label: '친구' },
  };

  const { backgroundColor, textColor, label } = labelColorMap[relationship];
  return (
    <BadgeContainer backgroundColor={backgroundColor} textColor={textColor}>
      {label}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  display: inline-flex;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background-color: ${({ backgroundColor }) => BADGE_COLOR[backgroundColor]};
  color: ${({ textColor }) => BADGE_COLOR_CONTENT[textColor]};
`;

export default RelationshipBadge;
