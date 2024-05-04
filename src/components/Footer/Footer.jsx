import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";
import { ReactComponent as YoutubeIcon } from "img/icons/youtube.svg";
import { ReactComponent as PinterestIcon } from "img/icons/pinterest.svg";
import { ReactComponent as TelegramIcon } from "img/icons/telegram.svg";
import { ReactComponent as LogoIcon } from "img/icons/logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/">
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/about">
            Про нас
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/rooms">
            Номера
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/service">
            Послуги
          </Link>
        </li>
      </ul>
      <div className={styles.socialContainer}>
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <YoutubeIcon className={styles.socialIcon} />
          </li>
          <li className={styles.socialItem}>
            <PinterestIcon className={styles.socialIcon} />
          </li>
          <li className={styles.socialItem}>
            <TelegramIcon className={styles.socialIcon} />
          </li>
        </ul>
        <Link to="/" className={styles.logoLink}>
          <LogoIcon className={styles.logoIcon} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
