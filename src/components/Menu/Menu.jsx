import ReactDOM from 'react-dom';

import Navigation from '@components/Navigation';
import styles from './Menu.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io?react';
import LogoIcon from '@img/icons/logo.svg?react';
import MediaQuery from 'react-responsive';

const Menu = ({ isOpen, toggleMenu }) => {
  let menuIsOpen = clsx(styles.menu, isOpen && styles.isOpen);

  return ReactDOM.createPortal(
    <MediaQuery maxWidth={768}>
    <div className={menuIsOpen} role="navigation">
      <div className={styles.box}>
        <Link to="/">
          <LogoIcon className={styles.logo} />
        </Link>
        <Link to="/login" className={styles.link} onClick={() => toggleMenu()}>Вхід</Link>
        {isOpen && (
          <button className={styles.button} onClick={() => toggleMenu()}>
            <span className={styles.iconClose}>
            <IoMdClose size={24}/>
            </span>
          </button>
        )}
      </div>
      <h2 className={styles.subtitle}>меню</h2>
      <Navigation toggleMenu={toggleMenu} />
      <a className={styles.number} href="tel:+380000000000">
        +380-00-000-0000
      </a>
    </div>
    </MediaQuery>,
    document.getElementById('menu-root')
  );
};

export default Menu;
