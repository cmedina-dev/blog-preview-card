import PreviewCardDate from './PreviewCardDate';
import TagList from '../TagList/TagList';
import card from './card.module.scss';
import PreviewCardImage from './PreviewCardImage';
import PreviewCardTitle from './PreviewCardTitle';
import PreviewCardText from './PreviewCardText';
import PreviewCardAvatar from './PreviewCardAvatar';

interface PreviewCardProps {
  url: string;
  tagList: string[];
  date: string;
  title: string;
  text: string;
  author: string;
}

const PreviewCard = (cardProps: PreviewCardProps) => {
  return (
    <>
      <div className={card.frame}>
        <div className={card.container}>
          <PreviewCardImage url={cardProps.url} />
          <TagList tagList={cardProps.tagList} />
          <PreviewCardDate date={cardProps.date} />
          <PreviewCardTitle title={cardProps.title} />
          <PreviewCardText text={cardProps.text} />
          <PreviewCardAvatar author={cardProps.author} />
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
