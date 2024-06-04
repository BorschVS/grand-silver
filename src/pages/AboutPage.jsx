import About from '@components/About';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <main style={{margin: '30px 0'}}>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <About />
    </main>
  );
};

export default AboutPage;
