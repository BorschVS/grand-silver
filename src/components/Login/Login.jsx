import styles from './Login.module.scss';

import LoginForm from 'components/LoginForm';
import Picture from 'components/Picture';
import { images } from 'api/gallery';
import NavBar from 'components/NavBar';
import { useLocation } from 'react-router-dom';
import SignUpForm from 'components/SignUpFrom/SignUpForm';
import MediaQuery from 'react-responsive';

const Login = () => {
  const location = useLocation().pathname;

  return (
    <div className={styles.container}>
      <MediaQuery minWidth={1024}>
        <Picture
          imgDesktop={images.desktop.login}
          imgMobile={images.mobile.login}
          alt='Готель "гранд сильвер"'
          width={60} // %
        />
      </MediaQuery>

      <div className={styles.navBox}>
        <NavBar />
        {location === '/login' && <LoginForm />}
        {location === '/signup' && <SignUpForm />}
      </div>
    </div>
  );
};

export default Login;
