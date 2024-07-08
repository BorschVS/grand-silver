import StyledLink from '@components/StyledLink';
import styles from './Hero.module.scss';

const { hero, overlay, container, title, text, button, shine } = styles;

const Hero = () => {
  return (
    <section className={hero}>
      <div className={overlay}>
        <div className={container}>
          <h1 className={title}>grand silver</h1>
          <p className={text}>
            Тут зливаються комфорт, та бездоганне обслуговування.
          </p>
          <button type="button" className={button}>
            <StyledLink to={'/book'}>Бронювати</StyledLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
