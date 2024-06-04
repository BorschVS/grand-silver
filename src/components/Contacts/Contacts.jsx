import styles from "./Contacts.module.scss";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

import MediaQuery from "react-responsive";

const { container, title, contacts, address, text, flexbox, mapbox, number, mail } = styles;

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Contacts = () => {
  const [markerRef, marker] = useMarkerRef();

  return (
    <div className={container}>
      <div className={flexbox}>
        <div className={contacts}>
          <h2 className={title}>Контакти</h2>
          <MediaQuery maxWidth={1023}>
            <div className={mapbox}>
              <APIProvider apiKey={API_KEY}>
                <Map
                  style={{ width: "100%", height: "100%" }}
                  defaultCenter={{ lat: 46.396784, lng: 30.750822 }} //46.396784, 30.750822
                  defaultZoom={12}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                />
                <Marker
                  ref={markerRef}
                  position={{ lat: 46.396784, lng: 30.750822 }}
                />
              </APIProvider>
            </div>
          </MediaQuery>
          <p className={text}>
            Фонтанська дорога в Київському районі Одеси — це місце, де морський
            бриз змішується з ароматом кави з численних затишних кав'ярень, а
            величні платани створюють природний навіс для неспішних прогулянок
            уздовж узбережжя Чорного моря. Тутешній готель дарує гостям
            поєднання комфорту і справжньої гостинності, занурюючи у неповторний
            місцевий колорит.
          </p>
          <address className={address}>
            <a className={`${text} ${number}`} href="tel:+3800000000">
              +380-00-00-000
            </a>
            <a className={`${text} ${mail}`} href="mailto:info@company.com">
              info@company.com
            </a>
            <p className={text}>вул. Фонтанська дорога, 22</p>
            <p className={text}>Одеса, 65009</p>
            <p className={text}>Україна</p>
          </address>
        </div>

        <MediaQuery minWidth={1024}>
          <div className={mapbox}>
            <APIProvider apiKey={API_KEY}>
              <Map
                style={{ width: "100%", height: "100%" }}
                defaultCenter={{ lat: 46.396784, lng: 30.750822 }} //46.396784, 30.750822
                defaultZoom={12}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              />
              <Marker
                ref={markerRef}
                position={{ lat: 46.396784, lng: 30.750822 }}
              />
            </APIProvider>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Contacts;
