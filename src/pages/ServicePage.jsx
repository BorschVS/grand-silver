import Service from 'components/Service/Service';
import { Helmet } from 'react-helmet';

const ServicePage = () => {
  return (
    <main>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <Service />
    </main>
  );
};

export default ServicePage;
