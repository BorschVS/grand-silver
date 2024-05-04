import { ReactComponent as Left } from "img/icons/left.svg";
import { ReactComponent as Right } from "img/icons/right.svg";
import styles from "./SliderDisplay.module.scss";

const {slider, leftArrow, rightArrow, cardIndex, line} = styles;

const SliderDisplay = ({total, current, prev, next}) => {

  return (
    <div className={slider}>
      <span className={leftArrow}>
        <Left onClick={()=> prev()}/>
      </span>
      <span className={cardIndex}>{current + 1}</span>
      <hr className={line} />
      <span className={cardIndex}>{total}</span>
      <span className={rightArrow}>
        <Right onClick={()=> next()}/>
      </span>
    </div>
  );
};

export default SliderDisplay;
