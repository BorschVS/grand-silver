import Contacts from 'components/Contacts';

import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />
    </main>
  );
};

export default ContactsPage;
