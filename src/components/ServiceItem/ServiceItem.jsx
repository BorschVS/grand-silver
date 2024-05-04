import styles from "./ServiceItem.module.scss";

const { serviceItem, thumb, serviceBox, subtitle, serviceIndex, text, button } =
  styles;

const ServiceItem = ({ id, serviceNumber, title, description, images }) => {
  return (
    <li key={id} className={serviceItem}>
      <picture className={thumb}>
        <source
          srcSet={`${images.desktop.x1} 1x,
                    ${images.desktop.x2} 2x,
                    ${images.desktop.x3} 3x`}
          media="(min-width: 1200px)"
          sizes="50vw"
        />
        <source
          srcSet={`${images.mobile.x1} 1x,
                    ${images.mobile.x2} 2x,
                    ${images.mobile.x3} 3x`}
          media="(max-width: 767px)"
          sizes="100vw"
        />
        <img
          src={images.mobile.x2}
          alt={title}
          sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
        />
      </picture>
      <div className={serviceBox}>
        <h3 className={subtitle}>
          <span className={serviceIndex}>0{serviceNumber}</span>
          {title}
        </h3>
        <p className={text}>{description}</p>
        <button className={button} type="button">
          Бронювати
        </button>
      </div>
    </li>
  );
};

export default ServiceItem;
