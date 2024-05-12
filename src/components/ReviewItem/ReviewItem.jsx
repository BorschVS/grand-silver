import styles from './ReviewItem.module.scss';

import Avatar from 'img/reviews/avatar960.jpg';
import { ReactComponent as IconStar } from 'img/icons/star.svg';

const {
  reviewItem,
  reviewCard,
  hiddenTitle,
  authorContainer,
  thumb,
  info,
  name,
  age,
  text,
  stars,
} = styles;

const ReviewItem = ({ review }) => {
  const { id, author, rating, comment } = review;
  const reviewRating = Array.from({ length: rating }, (_, index) => (
    <IconStar key={index} className={IconStar} />
  ));
  return (
    <li className={reviewItem}>
      <article className={reviewCard}>
        <h3 className={hiddenTitle}>review</h3>
        <div className={authorContainer}>
          <div className={thumb}>
            <img src={Avatar} />
          </div>
          <div className={info}>
            <p className={name}>{author}</p>
            <p className={age}>26 years</p>
          </div>
        </div>
        <div className={stars}>{reviewRating} </div>
        <p className={text}>{comment}</p>
      </article>
    </li>
  );
};

export default ReviewItem;
