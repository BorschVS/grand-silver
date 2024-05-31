import styles from './Contacts.module.scss';

const {container, title, contacts, address, text, box} = styles; 

const Contacts = () => {

  return (
    <div className={container}>
      <h2 className={title}>Контакти</h2>
      <div className={contacts}>
        <a href="tel:+3800000000">+380-00-00-000</a>
        <address className={address}>
          <a href="mailto:info@company.com">info@company.com</a>
          <p className={text}>ул. Хрещатик, 22</p>
          <p className={text}>Киев, 01001</p>
          <p className={text}>Украина</p>
        </address>
        <p className={text}>
          Ця адреса знаходиться у центрі біля Хрещатику. У престижному та
          відомому районі міста.
        </p>
      </div>

      <div className={box}>
        
      </div>

    </div>
  );
};

export default Contacts;