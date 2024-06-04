import Service from '@components/Service';
import { Helmet } from 'react-helmet';

const ServicePage = () => {
  return (
    <main style={{margin: '30px 0'}}>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <Service />
    </main>
  );
};

export default ServicePage;
