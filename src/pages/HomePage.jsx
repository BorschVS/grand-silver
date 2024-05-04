import About from "components/About";
import Hero from "components/Hero";
import Rooms from "components/Rooms";
import Service from "components/Service";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>GRAND SILVER</title>
      </Helmet>

      <Hero />
      <About />
      <Rooms/>
      <Service />
    </main>
  );
};

export default Home;