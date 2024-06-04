import About from '@components/About';
import Hero from '@components/Hero';
import Reviews from '@components/Reviews/Reviews';
import Rooms from '@components/Rooms';
import Service from '@components/Service';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>GRAND SILVER</title>
      </Helmet>

      <Hero />
      <About />
      <Rooms />
      <Service />
      <Reviews />
    </main>
  );
};

export default HomePage;
