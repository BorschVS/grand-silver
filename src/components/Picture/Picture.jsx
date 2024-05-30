import styles from './Picture.module.scss';

const Picture = ({imgDesktop, imgMobile, alt, width, heigth}) => {
    return <picture className={styles.thumb} style={{width: `${width}%`, heigth: `${heigth}px`}}>
    <source
      srcSet={`${imgDesktop.x1} 1x,
                ${imgDesktop.x2} 2x,
                ${imgDesktop.x3} 3x`}
      media="(min-width: 1200px)"
      sizes="50vw"
    />
    <source
      srcSet={`${imgMobile.x1} 1x,
                ${imgMobile.x2} 2x,
                ${imgMobile.x3} 3x`}
      media="(max-width: 767px)"
      sizes="100vw"
    />
    <img
      src={imgDesktop.x2}
      alt={alt}
      sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
    />
  </picture>
}

export default Picture;