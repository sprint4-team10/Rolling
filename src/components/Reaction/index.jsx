import styled from 'styled-components';
import COLORS from '../../utils/colors';

const Reaction = ({ reaction }) => {
  return (
    <Container>
      {reaction.emoji} {reaction.count}
    </Container>
  );
};

const Container = styled.li`
  background-color: ${COLORS.gray400};
  color: #fff;
  padding: 8px 12px;
  border-radius: 32px;
  font-size: 1.6rem;
  @media (max-width: 960px) {
    padding: 4px 8px;
    font-size: 1.2rem;
  }
`;

export default Reaction;
