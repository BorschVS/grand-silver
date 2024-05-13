import About from 'components/About/About';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <main>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <About />
    </main>
  );
};

export default AboutPage;
