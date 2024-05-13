import { Helmet } from 'react-helmet';

import Rooms from 'components/Rooms';

const RoomsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <Rooms />
    </main>
  );
};

export default RoomsPage;
