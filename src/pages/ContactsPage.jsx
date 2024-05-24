import Contacts from "components/Contacts";

const { Helmet } = require("react-helmet")

const ContactsPage = () => {
    return <main>
        <Helmet>
            <title>Contacts</title>
        </Helmet>
        <Contacts/>
    </main>
}

export default ContactsPage;