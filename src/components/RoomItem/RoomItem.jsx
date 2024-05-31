import styles from "./RoomItem.module.scss";

const { roomItem, roomCard, roomThumb, roomBox, subtitle, text, button } =
  styles;

const RoomItem = ({ id, title, description, images, translate }) => {
  return (
    <div key={id} className={roomItem} style={translate}>
      <article className={roomCard}>
        <picture className={roomThumb}>
          <source
            srcSet={`${images.mobile.x1} 1x, ${images.mobile.x2} 2x, ${images.mobile.x3} 3x`}
            media="(max-width: 768px)"
            sizes="100vw"
          />
          <source
            srcSet={`${images.desktop.x1} 1x, ${images.desktop.x2} 2x, ${images.desktop.x3} 3x`}
            media="(min-width: 1200px)"
            sizes="33vw"
          />
          <img
            src={images.desktop.x2}
            alt={title}
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </picture>
        <div className={roomBox}>
          <h3 className={subtitle}>{title}</h3>
          <p className={text}>{description}</p>
          <button className={button} type="button">
            {/* <Link path={`/${path}`}> */}
            Детальніше
            {/* </Link> */}
          </button>
        </div>
      </article>
    </div>
  );
};

export default RoomItem;
