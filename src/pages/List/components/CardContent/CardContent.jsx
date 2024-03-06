import COLORS from '../../../../utils/colors';
import Senders from '../../../../components/Senders';
import Reaction from '../../../../components/Reaction';
import * as S from './CardContentStyled';

const CardContent = ({ title, messageCount, messages, backgroundImageURL, topReactions }) => {
  return (
    <S.Wrapper>
      <S.Title $backgroundImageURL={backgroundImageURL}>To. {title}</S.Title>
      <S.Sender>
        <Senders
          containerStyle={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem', display: 'flex' }}
          profileListStyle={{ height: '3rem' }}
          descriptionStyle={{ color: backgroundImageURL ? COLORS.white : COLORS.gray900 }}
          messageCount={messageCount}
          messages={messages}
        />
      </S.Sender>
      <S.Reactions>
        {topReactions.map((reaction) => (
          <Reaction
            containerStyle={{ padding: '0.8rem 1.2rem', fontSize: '1.6rem' }}
            key={reaction.id}
            reaction={reaction}
          />
        ))}
      </S.Reactions>
    </S.Wrapper>
  );
};

export default CardContent;
