import Contacts from '@components/Contacts';

import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <main style={{margin: '30px 0'}}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />
    </main>
  );
};

export default ContactsPage;
