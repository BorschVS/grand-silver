import styles from './Reviews.module.scss';
import 'swiper/scss';

import { useRef, useState } from 'react';
import { getReviews } from 'api/reviews';

import { useSlider } from 'hooks/useSlider';
import SliderDisplay from 'components/SliderDisplay/SliderDisplay';
import ReviewItem from 'components/ReviewItem/ReviewItem';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const { reviews, container, wrapper, subtitle, list } = styles;

const Reviews = () => {
  const swiperRef = useRef(null);

  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsData = getReviews();

  const { showPrevSlide, showNextSlide } = useSlider(
    reviewIndex,
    reviewsData,
    setReviewIndex,
    swiperRef
  );

  return (
    <section className={reviews}>
      <div className={container}>
        <h2 className={subtitle}>відгуки</h2>
        <div className={wrapper}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={swiper => {
              setReviewIndex(swiper.activeIndex);
            }}
            ref={swiperRef}
          >
            <ul className={list}>
              {reviewsData.map(review => (
                <SwiperSlide key={review.id}>
                  <ReviewItem review={review} />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>

          <SliderDisplay
            total={reviewsData.length}
            current={reviewIndex}
            prev={showPrevSlide}
            next={showNextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
