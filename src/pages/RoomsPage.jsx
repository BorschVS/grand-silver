import { Helmet } from 'react-helmet';

import Rooms from 'components/Rooms';

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
