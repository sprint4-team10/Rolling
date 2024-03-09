import SyncLoader from 'react-spinners/SyncLoader';
import * as S from './LoadingStyled';

const Loading = () => {
  return (
    <S.Container>
      <S.Title>Loading...</S.Title>
      <SyncLoader color="#A64EFF" size={15} />
    </S.Container>
  );
};

export default Loading;
