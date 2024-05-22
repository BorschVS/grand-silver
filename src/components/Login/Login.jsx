import styles from './Login.module.scss';

import LoginForm from 'components/LoginForm';
import Picture from 'components/Picture';
import { images } from 'api/gallery';


const Login = () => {
    return <div className={styles.container}>
        <Picture imgDesktop={images.desktop.login} imgMobile={images.mobile.login} alt={'Готель "гранд сильвер"'} width={60} />
        <LoginForm />
    </div>
}

export default Login;