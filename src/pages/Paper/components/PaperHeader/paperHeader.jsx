import arrowDownImg from '../../../../assets/icons/arrow_down.svg';
import shareImg from '../../../../assets/icons/share.svg';
import Layout from '../../../../layout/Layout';
import Senders from '../../../../components/Senders';
import Reaction from '../../../../components/Reaction';
import { usePopOver } from '../../../../hooks/usePopOver';
import ReactionAddButton from '../../../../components/ReactionAddButton';
import ReactionsPopOver from '../../../../components/ReactionsPopOver';
import SharePopOver from '../../../../components/SharePopOver';
import * as S from './paperHeaderStyled';

const PaperHeader = ({ item, triggerUpdate, update }) => {
  const { isOpen: iconsIsOpen, ref: iconsRef, handleOpen: iconsHandleOpen } = usePopOver();
  const {
    isOpen: shareIsOpen,
    ref: shareRef,
    handleOpen: shareHandleOpen,
    handleClose: shareHandleClose,
  } = usePopOver();
  const handleIconMore = () => {
    iconsHandleOpen();
  };

  const handleShare = () => {
    shareHandleOpen();
  };

  return (
    <S.Header>
      <Layout>
        <S.Headings>
          <S.Title>
            <S.Recipient>To. {item.name}</S.Recipient>
          </S.Title>
          <S.Contents>
            {/* senders */}
            <ReactionsPopOver ref={iconsRef} isOpen={iconsIsOpen} update={update} />
            <SharePopOver ref={shareRef} isOpen={shareIsOpen} handleClose={shareHandleClose} />
            <Senders
              messageCount={item.messageCount}
              messages={item.recentMessages}
              descriptionStyle={{ marginLeft: '10px' }}
            />
            <S.Reactions>
              {item.topReactions.map((reaction) => (
                <Reaction key={reaction.id} reaction={reaction} />
              ))}
              <S.MoreBtn onClick={handleIconMore}>
                <img src={arrowDownImg} alt="arrowDownIcon" />
              </S.MoreBtn>
              <ReactionAddButton triggerUpdate={triggerUpdate} />
            </S.Reactions>
            <S.Share>
              <S.ShareBtn onClick={handleShare}>
                <img src={shareImg} alt="shareIcon" />
              </S.ShareBtn>
            </S.Share>
          </S.Contents>
        </S.Headings>
      </Layout>
    </S.Header>
  );
};

export default PaperHeader;
