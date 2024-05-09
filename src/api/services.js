import { images } from './gallery';
import { nanoid } from 'nanoid';

const services = [
  {
    id: nanoid(),
    title: 'Бари',
    description:
      'Бари спеціалізуються на продажу алкогольних напоїв, таких як вино, пиво, коктейлі та міцні напої. У барах можна замовити закуски та невеликі страви.',
    images: {
      mobile: {
        x1: images.mobile.services.bar.x1,
        x2: images.mobile.services.bar.x2,
        x3: images.mobile.services.bar.x3,
      },
      desktop: {
        x1: images.desktop.services.bar.x1,
        x2: images.desktop.services.bar.x2,
        x3: images.desktop.services.bar.x3,
      },
    },
  },
  {
    id: nanoid(),
    title: 'Басейн',
    description:
      'Басейни на відкритому повітрі або закриті, вони зазвичай містять воду, що грівається до комфортної температури.',
    images: {
      mobile: {
        x1: images.mobile.services.pool.x1,
        x2: images.mobile.services.pool.x2,
        x3: images.mobile.services.pool.x3,
      },
      desktop: {
        x1: images.desktop.services.pool.x1,
        x2: images.desktop.services.pool.x2,
        x3: images.desktop.services.pool.x3,
      },
    },
  },
  {
    id: nanoid(),
    title: 'Вечірки',
    description:
      'Свята включають програму, що складається з різноманітних активностей, виступів, виставок, демонстрацій.',
    images: {
      mobile: {
        x1: images.mobile.services.party.x1,
        x2: images.mobile.services.party.x2,
        x3: images.mobile.services.party.x3,
      },
      desktop: {
        x1: images.desktop.services.party.x1,
        x2: images.desktop.services.party.x2,
        x3: images.desktop.services.party.x3,
      },
    },
  },
];

export const getServices = () => {
  return services;
};

export const getServiceById = id => {
  return services.find(service => service.id === id);
};

export const getServiceByTitle = title => {
  return services.find(service => service.title === title);
};
