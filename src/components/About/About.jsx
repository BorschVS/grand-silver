import styles from './About.module.scss';

import MediaQuery from 'react-responsive';

import { images } from '@api/gallery';

const { about, container, wrapper, subtitle, picture, text, button, thumb } =
  styles;

const About = () => {
  return (
    <section className={about} id="about">
      <div className={container}>
        <div className={wrapper}>
          <h2 className={subtitle}>про нас</h2>

          <MediaQuery maxWidth={767}>
          <div className={thumb}>
            <picture className={picture}>
              <source
                srcSet={`
                ${images.mobile.about.x1} 1x,
                ${images.mobile.about.x2} 2x,
                ${images.mobile.about.x3} 3x`}
                media="(max-width: 768px)"
                sizes="100vw"
              />
              <source
                srcSet={`
                ${images.desktop.about.x1} 1x,
                ${images.desktop.about.x2} 2x,
                ${images.desktop.about.x3} 3x`}
                media="(min-width: 1200px)"
                sizes="50vw"
              />
              <img
                src={images.mobile.about.x2}
                alt="Басейн на даху"
                sizes="(min-width: 1200px) 50vw, 100vw"
                loading="lazy"
              />
            </picture>
          </div>
          </MediaQuery>
          <MediaQuery maxWidth={1023}>

            <p className={text}>
              GRAND SILVER — це не просто місце для проживання, це справжній
              досвід. Наш готель поєднує в собі гостинність, розкіш та увагу до
              деталей.
            </p>
          </MediaQuery>

          <MediaQuery minWidth={1024}>
            <p className={text}>
              GRAND SILVER — це не просто місце для проживання, це справжній
              досвід. <br /> Наш готель поєднує в собі гостинність, розкіш та
              увагу до деталей. Ми створили затишний притулок, де кожен гість
              стає частиною нашої історії. Наша місія – зробити ваше перебування
              незабутнім, надавши винятковий сервіс, дивовижні зручності та
              атмосферу, в якій ви відчуєте себе як удома.
            </p>
          </MediaQuery>

          <button type="button" className={button}>
            Бронювати
          </button>
        </div>
        <MediaQuery minWidth={768}>
          <div className={thumb}>
            <picture className={picture}>
              <source
                srcSet={`
                ${images.mobile.about.x1} 1x,
                ${images.mobile.about.x2} 2x,
                ${images.mobile.about.x3} 3x`}
                media="(max-width: 768px)"
                sizes="100vw"
              />
              <source
                srcSet={`
                ${images.desktop.about.x1} 1x,
                ${images.desktop.about.x2} 2x,
                ${images.desktop.about.x3} 3x`}
                media="(min-width: 1200px)"
                sizes="50vw"
              />
              <img
                src={images.mobile.about.x2}
                alt="Басейн на даху"
                sizes="(min-width: 1200px) 50vw, 100vw"
                loading="lazy"
              />
            </picture>
          </div>
        </MediaQuery>
      </div>
    </section>
  );
};

export default About;
