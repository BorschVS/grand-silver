import { images } from "./gallery";

import { nanoid } from "nanoid";

const rooms = [
  {
    id: nanoid(),
    title: "Бунгало",
    description:
      "Наші затишні бунгало надають поєднання комфорту та природної гармонії. З панорамними вікнами, що відкривають...",
    images: {
      mobile: images.mobile.rooms.bungalow,
      desktop: images.desktop.rooms.bungalow,
    },
  },
  {
    id: nanoid(),
    title: "Коттедж",
    description:
      "Проживання в котедж-бунгало – це ваш власний куточок у нашому раю природи. Стильний дизайнінтер'єру, сучасні зручності та...",
    images: {
      mobile: images.mobile.rooms.cottage,
      desktop: images.desktop.rooms.cottage,
    },
  },
  {
    id: nanoid(),
    title: "Номер",
    description:
      "Поєднання стильного дизайну, комфорту та сучасних зручностей створює атмосферу, в якій ви відчуєте себе як удома. Незалежно...",
    images: {
      mobile: images.mobile.rooms.room,
      desktop: images.desktop.rooms.room,
    },
  },
];

export const getRooms = () => {
  return rooms;
};

export const getRoomById = (id) => {
  return rooms.find((room) => room.id === id);
};
