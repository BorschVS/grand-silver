export const useSlider = (index, data, setIndex) => {
  const showPrevSlide = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  };

  const showNextSlide = () => {
    if (index === data.length - 1) return setIndex(0);

    setIndex(index + 1);
  };

  return { showPrevSlide, showNextSlide };
};
