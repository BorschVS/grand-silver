import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Menu from '@components/Menu';

import LogoIcon from '@img/icons/logo.svg?react';

import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Navigation from '@components/Navigation';

const { header, container, logo, login, scroll } = styles;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen && window.innerWidth < 768
      ? document.body.classList.add(scroll)
      : document.body.classList.remove(scroll);

    return () => {
      document.body.classList.remove(scroll);
    };
  }, [isOpen]);

  return (
    <header className={header}>
      <div className={container}>
        <Link to="/">
          <span className={logo}>
          <LogoIcon />
          </span>
        </Link>
        {!isOpen && (
          <button className={styles.button} onClick={() => toggleMenu()}>
            меню
          </button>
        )}
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        <MediaQuery minWidth={768}>
          <Navigation toggleMenu={toggleMenu} />
        </MediaQuery>
        <Link className={login} to={'/login'}>
          Вхід
        </Link>
      </div>
    </header>
  );
};

export default Header;
