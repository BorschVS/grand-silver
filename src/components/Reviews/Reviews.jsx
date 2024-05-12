import ReviewItem from 'components/ReviewItem/ReviewItem';
import styles from './Reviews.module.scss';

import { useSlider } from 'hooks/useSlider';
import { useState } from 'react';
import { getReviews } from 'api/reviews';

import SliderDisplay from 'components/SliderDisplay/SliderDisplay';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const { reviews, container, subtitle } = styles;

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsData = getReviews();

  const { showPrevSlide, showNextSlide } = useSlider(
    reviewIndex,
    reviewsData,
    setReviewIndex
  );

  return (
    <section className={reviews}>
      <div className={container}>
        <h2 className={subtitle}>відгуки</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={swiper => {
            setReviewIndex(swiper.activeIndex);
          }}
        >
          {reviewsData.map(review => (
            <SwiperSlide key={review.id}>
              <ReviewItem review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderDisplay
          total={reviewsData.length}
          current={reviewIndex}
          prev={showPrevSlide}
          next={showNextSlide}
        />
      </div>
    </section>
  );
};

export default Reviews;
