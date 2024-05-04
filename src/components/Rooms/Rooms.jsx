import RoomItem from "components/RoomItem";
import { getRooms } from "api/rooms";
import { useState } from "react";
import { useSlider } from "hooks/useSlider";

import styles from "./Rooms.module.scss";

import SliderDisplay from "components/SliderDisplay";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MediaQuery from "react-responsive";

const { rooms, container, roomList, subtitle } = styles;

const Rooms = () => {
  const roomsData = getRooms();
  const [roomIndex, setRoomIndex] = useState(0);

  const { showPrevRoom, showNextRoom } = useSlider(
    roomIndex,
    roomsData,
    setRoomIndex
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={rooms}>
      <div className={container}>
        <h2 className={subtitle}>номера</h2>

        <MediaQuery maxWidth={1023}>
          <div className="slider-container">
            <Slider {...settings}>
              {roomsData.map(({ id, title, description, images }) => {
                return (
                  <RoomItem
                    key={id}
                    title={title}
                    description={description}
                    images={images}
                    translate={{ translate: `${-100 * roomIndex}%` }}
                    currentIndex={roomIndex}
                  />
                );
              })}
            </Slider>
          </div>

          <SliderDisplay
            total={roomsData.length}
            current={roomIndex}
            prev={showPrevRoom}
            next={showNextRoom}
          />
        </MediaQuery>

        <MediaQuery minWidth={1024}>
          <ul className={roomList}>
            {roomsData.map(({ id, title, description, images }) => {
              return (
                <RoomItem
                  key={id}
                  title={title}
                  description={description}
                  images={images}
                  currentIndex={roomIndex}
                />
              );
            })}
          </ul>
        </MediaQuery>
      </div>
    </section>
  );
};

export default Rooms;
