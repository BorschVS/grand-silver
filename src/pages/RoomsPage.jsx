import Rooms from '@components/Rooms';
import { Helmet } from 'react-helmet';

const RoomsPage = () => {
  return (
    <main style={{margin: '30px 0'}}>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <Rooms />
    </main>
  );
};

export default RoomsPage;
