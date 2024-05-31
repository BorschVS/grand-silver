import Picture from 'components/Picture';
import styles from './ServiceItem.module.scss';

const { serviceItem, serviceBox, subtitle, serviceIndex, text, button } =
  styles;

const ServiceItem = ({ id, serviceNumber, title, description, images}) => {
  return (
    <li key={id} className={serviceItem}>
      <Picture imgDesktop={images.desktop} imgMobile={images.mobile} alt={title}/>
      <div className={serviceBox}>
        <h3 className={subtitle}>
          <span className={serviceIndex}>0{serviceNumber}</span>
          {title}
        </h3>
        <p className={text}>{description}</p>
        <button className={button} type="button">
          Детальніше
        </button>
      </div>
    </li>
  );
};

export default ServiceItem;
