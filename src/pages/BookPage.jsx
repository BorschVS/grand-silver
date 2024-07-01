import DatePicker from '@components/DatePicker';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <main>
      <Helmet>
        <title>Book</title>
      </Helmet>
      <DatePicker />
    </main>
  );
};

export default AboutPage;
