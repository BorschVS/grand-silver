import styles from './NavBar.module.scss';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isActive, setIsActive] = useState({ login: false, signup: false });
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/login') {
      setIsActive({ login: true, signup: false });
    } else if (location === '/signup') {
      setIsActive({ login: false, signup: true });
    }
    // eslint-disable-next-line
  }, []);

  const isActiveClassName = isActive => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <div className={styles.container}>
      <NavLink
        to={'/login'}
        className={isActiveClassName(isActive.login)}
        onClick={() => setIsActive({ login: true, signup: false })}
      >
        Вхід
      </NavLink>
      <NavLink
        to={'/signup'}
        className={isActiveClassName(isActive.signup)}
        onClick={() => setIsActive({ signup: true, login: false })}
      >
        Реєстрація
      </NavLink>
    </div>
  );
};

export default NavBar;
