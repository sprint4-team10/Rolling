import styled, { css } from 'styled-components';
import COLORS from '../../../../../utils/colors';
import Senders from '../../../../../components/Senders';
import Reaction from '../../../../../components/Reaction';

const CardContent = ({ title, messageCount, messages, backgroundImageURL, topReactions }) => {
  return (
    <Wrapper>
      <Title backgroundImageURL={backgroundImageURL}>To. {title}</Title>
      <Sender>
        <Senders
          containerStyle={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem', display: 'flex' }}
          profileListStyle={{ height: '3rem' }}
          descriptionStyle={{ color: backgroundImageURL ? COLORS.white : COLORS.gray900 }}
          messageCount={messageCount}
          messages={messages}
        />
      </Sender>
      <Reactions>
        {topReactions.map((reaction) => (
          <Reaction
            containerStyle={{ padding: '0.8rem 1.2rem', fontSize: '1.6rem' }}
            key={reaction.id}
            reaction={reaction}
          />
        ))}
      </Reactions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

const Title = styled.div`
  margin-bottom: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;

  ${(props) =>
    props.backgroundImageURL &&
    css`
      color: ${COLORS.white};
    `}

  /* 백그라운드가 이미지가 아닌 경우 */
  ${(props) =>
    !props.backgroundImageURL &&
    css`
      color: ${COLORS.gray900};
    `}
`;

const Sender = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.3rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.12);
`;

const Reactions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;

export default CardContent;
