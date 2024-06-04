import styles from './SliderDisplay.module.scss';
import Prev from '@img/icons/left.svg?react';
import Next from '@img/icons/right.svg?react';

const { slider, leftArrow, rightArrow, cardIndex, line } = styles;

const SliderDisplay = ({ total, current, prev, next }) => {
  return (
    <div className={slider}>
      <span className={leftArrow}>
        <Prev onClick={() => prev()} />
      </span>
      <span className={cardIndex}>{current + 1}</span>
      <hr className={line} />
      <span className={cardIndex}>{total}</span>
      <span className={rightArrow}>
        <Next onClick={() => next()} />
      </span>
    </div>
  );
};

export default SliderDisplay;
