import styles from './ReviewItem.module.scss';

import Avatar from 'img/reviews/User-avatar.png';
import { ReactComponent as IconStar } from 'img/icons/star.svg';
import { useWordEnding } from 'hooks/useWordEnding';

const {
  reviewItem,
  reviewCard,
  hiddenTitle,
  authorContainer,
  reviewContainer,
  thumb,
  info,
  name,
  text,
  stars,
} = styles;

const ReviewItem = ({ review }) => {
  const { author, rating, age, comment } = review;

  const reviewRating = Array.from({ length: rating }, (_, index) => (
    <IconStar key={index} className={IconStar} />
  ));

  const useEnding = useWordEnding();
  const wordForms = ['рік', 'роки', 'років'];

  return (
    <li className={reviewItem}>
      <article className={reviewCard}>
        <h3 className={hiddenTitle}>review</h3>
        <div className={authorContainer}>
          <div className={thumb}>
            <img src={Avatar} alt="Фото користувача" />
          </div>
          <div className={info}>
            <p className={name}>{author}</p>
            <p className={styles.age}>{`${age} ${useEnding(
              age,
              wordForms
            )}`}</p>
          </div>
        </div>
        <div className={reviewContainer}>
          <div className={stars}>{reviewRating}</div>
          <p className={text}>{comment}</p>
        </div>
      </article>
    </li>
  );
};

export default ReviewItem;
