export const useSlider = (index, data, setIndex, swiperRef) => {
  const showPrevSlide = () => {
    if (index === 0) return;
    swiperRef.current.swiper.slideTo(index - 1);
    setIndex(index - 1);
  };

  const showNextSlide = () => {
    console.log(swiperRef);

    if (index === data.length - 1) return;
    swiperRef.current.swiper.slideTo(index + 1);
    setIndex(index + 1);
  };

  return { showPrevSlide, showNextSlide };
};
