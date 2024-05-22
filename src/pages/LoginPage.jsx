import { images } from 'api/gallery';
import Login from 'components/Login';
import LoginForm from 'components/LoginForm';
import Picture from 'components/Picture';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </main>
  );
};

export default LoginPage;
