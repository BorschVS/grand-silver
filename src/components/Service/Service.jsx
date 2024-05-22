import { getServices } from "api/services";
import ServiceItem from "components/ServiceItem";

import styles from "./Service.module.scss";

const { service, container, serviceList, subtitle } = styles;


const Service = () => {
  const services = getServices();
  let count = 0;
  
  return (
    <section className={service}>
      <div className={container}>
        <h2 className={subtitle}>послуги</h2>
        <ul className={serviceList}>
          {services.map(({ id, title, description, images}) => {
            count++;
            return (
              <ServiceItem
                key={id}
                serviceNumber={count}
                title={title}
                description={description}
                images={images}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Service;
