import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = ({ toggleMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/" onClick={() => toggleMenu()}>
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to="/about"
            onClick={() => toggleMenu()}
          >
            Про нас
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to="/rooms"
            onClick={() => toggleMenu()}
          >
            Номера
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to="/service"
            onClick={() => toggleMenu()}
          >
            Послуги
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navLink}
            to="/contacts"
            onClick={() => toggleMenu()}
          >
            Контакти
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
