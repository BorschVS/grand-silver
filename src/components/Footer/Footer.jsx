import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";
import YoutubeIcon from "@img/icons/youtube.svg?react";
import PinterestIcon from "@img/icons/pinterest.svg?react";
import TelegramIcon from "@img/icons/telegram.svg?react";
import LogoIcon from "@img/icons/logo.svg?react";
import MediaQuery from "react-responsive";

const {
  container,
  footer,
  navList,
  navItem,
  navLink,
  socialContainer,
  socialList,
  socialItem,
  socialIcon,
  logoLink,
  logoIcon,
  number,
  desktop, box,
} = styles;

const Footer = () => {
  return (
    <div className={container}>
      <footer className={footer}>
        <MediaQuery maxWidth={1023}>
          <ul className={navList}>
            <li className={navItem}>
              <Link className={navLink} to="/">
                Головна
              </Link>
            </li>
            <li className={navItem}>
              <Link className={navLink} to="/about">
                Про нас
              </Link>
            </li>
            <li className={navItem}>
              <Link className={navLink} to="/rooms">
                Номера
              </Link>
            </li>
            <li className={navItem}>
              <Link className={navLink} to="/service">
                Послуги
              </Link>
            </li>
          </ul>

          <div className={socialContainer}>
            <ul className={socialList}>
              <li className={socialItem}>
                <YoutubeIcon className={socialIcon} />
              </li>
              <li className={socialItem}>
                <PinterestIcon className={socialIcon} />
              </li>
              <li className={socialItem}>
                <TelegramIcon className={socialIcon} />
              </li>
            </ul>
          </div>
          <Link to="/" className={logoLink}>
            <LogoIcon className={logoIcon} />
          </Link>
        </MediaQuery>

        <MediaQuery minWidth={1024}>
          <div className={desktop}>
            <div className={box}>
              <Link to="/" className={logoLink}>
                <LogoIcon className={logoIcon} />
              </Link>
              <ul className={navList}>
                <li className={navItem}>
                  <Link className={navLink} to="/">
                    Головна
                  </Link>
                </li>
                <li className={navItem}>
                  <Link className={navLink} to="/about">
                    Про нас
                  </Link>
                </li>
                <li className={navItem}>
                  <Link className={navLink} to="/rooms">
                    Номера
                  </Link>
                </li>
                <li className={navItem}>
                  <Link className={navLink} to="/service">
                    Послуги
                  </Link>
                </li>
              </ul>

              <a className={number} href="tel:+38000000000">
                +380-00-000-0000
              </a>
            </div>
            <div className={socialContainer}>
              <ul className={socialList}>
                <li className={socialItem}>
                  <YoutubeIcon className={socialIcon} />
                </li>
                <li className={socialItem}>
                  <PinterestIcon className={socialIcon} />
                </li>
                <li className={socialItem}>
                  <TelegramIcon className={socialIcon} />
                </li>
              </ul>
            </div>
          </div>
        </MediaQuery>
      </footer>
    </div>
  );
};

export default Footer;
