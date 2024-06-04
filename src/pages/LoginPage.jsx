import Login from '@components/Login';
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
