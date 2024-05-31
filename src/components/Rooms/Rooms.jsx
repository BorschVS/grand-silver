import React, { useState, useRef } from 'react';

import RoomItem from 'components/RoomItem';

import { getRooms } from 'api/rooms';
import { useSlider } from 'hooks/useSlider';

import SliderDisplay from 'components/SliderDisplay';
import MediaQuery from 'react-responsive';

//Swiper
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import styles from './Rooms.module.scss';

const { rooms, container, roomList, subtitle } = styles;

const Rooms = () => {
  const swiperRef = useRef(null);

  const roomsData = getRooms();
  const [roomIndex, setRoomIndex] = useState(0);

  const { showPrevSlide, showNextSlide } = useSlider(
    roomIndex,
    roomsData,
    setRoomIndex,
    swiperRef
  );

  return (
    <section className={rooms}>
      <div className={container}>
        <h2 className={subtitle}>номера</h2>

        <MediaQuery maxWidth={1023}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={swiper => {
              setRoomIndex(swiper.activeIndex);
            }}
            ref={swiperRef}
          >
            {roomsData.map(({ id, title, description, images }) => {
              return (
                <SwiperSlide key={id}>
                  <RoomItem
                    id={id}
                    title={title}
                    description={description}
                    images={images}
                    currentIndex={roomIndex}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <SliderDisplay
            total={roomsData.length}
            current={roomIndex}
            prev={showPrevSlide}
            next={showNextSlide}
          />
        </MediaQuery>

        <MediaQuery minWidth={1024}>
          <div className={roomList}>
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
          </div>
        </MediaQuery>
      </div>
    </section>
  );
};

export default Rooms;
