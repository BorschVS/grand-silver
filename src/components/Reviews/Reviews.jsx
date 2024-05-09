import SliderDisplay from 'components/SliderDisplay/SliderDisplay';
import styles from './Reviews.module.scss';
import { ReactComponent as IconStar } from 'img/icons/star.svg';
import Avatar from 'img/reviews/avatar960.jpg';
import { useSlider } from 'hooks/useSlider';
import { useState } from 'react';
import { getReviews } from 'api/reviews';
const {
  reviews,
  container,
  subtitle,
  reviewCard,
  hiddenTitle,
  authorContainer,
  thumb,
  info,
  name,
  age,
  stars,
  review,
} = styles;

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = getReviews();

  const { showPrevRoom, showNextRoom } = useSlider(
    reviewIndex,
    reviews,
    setReviewIndex
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={reviews}>
      <div className={container}>
        <h2 className={subtitle}>відгуки</h2>

        {/* <ul className={list}>
          {reviews.map(review => (
            <ReviewItem reviewData={review} />
          ))}
        </ul> */}
        <article className={reviewCard}>
          <h3 className={hiddenTitle}>review</h3>
          <div className={authorContainer}>
            <div className={thumb}>
              <img src={Avatar} />
            </div>
            <div className={info}>
              <p className={name}>Ігор Тарасов</p>
              <p className={age}>26 years</p>
            </div>
          </div>
          <div className={stars}>
            <IconStar className={IconStar} />
          </div>
          <p className={review}>
            Мені дістався просторий номер з чудовим краєвидом на міський пейзаж.
            У номері було чисто та затишно, меблі та обстановка залишили на мене
            чудове враження. Всі необхідні зручності, як кондиціонер, міні-бар і
            сейф, були надані в повному обсязі.
          </p>
        </article>
        <SliderDisplay />
      </div>
    </section>
  );
};

export default Reviews;
