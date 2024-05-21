import styles from "./Header.module.scss";
import { useState } from "react";
import Menu from "components/Menu";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

import { ReactComponent as LogoIcon } from "img/icons/logo.svg";

import { Link } from "react-router-dom";

const {header, container, logo, iconClose, number, login} = styles;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonIsOpen = clsx(styles.button, isOpen && styles.isOpen);

  return (
    <header className={header}>
      <div className={container}>
        <Link to="/">
          <LogoIcon className={logo} />
        </Link>
        <button className={buttonIsOpen} onClick={() => toggleMenu()}>
          {isOpen && <IoMdClose size={24} className={iconClose} />}
          {!isOpen && "меню"}
        </button>
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        <a className={number} href="tel:+380000000000">
          +380-00-000-0000
        </a>

        <Link className={login} to={'/login'}>Login</Link>
      </div>
    </header>
  );
};

export default Header;
