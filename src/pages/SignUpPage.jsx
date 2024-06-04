import Login from '@components/Login';
import { Helmet } from 'react-helmet';


const SignUpPage = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </main>
  );
};

export default SignUpPage;