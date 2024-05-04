export const useSlider = (index, data, setIndex) => {
  const showPrevRoom = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  };

  const showNextRoom = () => {
    if (index === data.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  return { showPrevRoom, showNextRoom };
};
