import Navigation from "components/Navigation";
import styles from "./Menu.module.scss";
import clsx from "clsx";

const Menu = ({ isOpen, toggleMenu }) => {
  const menuIsOpen = clsx(styles.menu, isOpen && styles.isOpen);
  return (
    <div className={menuIsOpen} role="navigation">
       <h2 className={styles.subtitle}>меню</h2>
      <Navigation toggleMenu={toggleMenu} />
      <a className={styles.number} href="tel:+380000000000">
        +380-00-000-0000
      </a>
    </div>
  );
};

export default Menu;
