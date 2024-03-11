import { Link } from 'react-router-dom';
import CardContent from '../CardContent/CardContent';
import pattern1 from '../../../../assets/pattern/pattern_01.svg';
import pattern2 from '../../../../assets/pattern/pattern_02.svg';
import pattern3 from '../../../../assets/pattern/pattern_03.svg';
import pattern4 from '../../../../assets/pattern/pattern_04.svg';
import * as S from './CardStyled';

const cardPattern = {
  beige: pattern2,
  purple: pattern1,
  blue: pattern3,
  green: pattern4,
};

const Card = ({ id, title, backgroundColor, backgroundImageURL, messageCount, messages, topReactions }) => {
  return (
    <Link to={`/post/${id}`}>
      <S.Wrapper $backgroundImageUrl={backgroundImageURL} $backgroundColor={backgroundColor}>
        {!backgroundImageURL && <S.PatternImg src={cardPattern[backgroundColor]} alt="pattern" />}
        <S.CardContentWrapper>
          <CardContent
            title={title}
            messageCount={messageCount}
            messages={messages}
            backgroundImageURL={backgroundImageURL}
            topReactions={topReactions}
          />
        </S.CardContentWrapper>
      </S.Wrapper>
    </Link>
  );
};

export default Card;
