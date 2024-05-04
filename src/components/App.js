import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/AboutPage"));
const Rooms = lazy(() => import("../pages/RoomsPage"));
const Service = lazy(() => import("../pages/ServicePage"));
const NoPage = lazy(() => import("../pages/NoPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="service" element={<Service />} />
        <Route path="*" element={<NoPage />} />
      </Route>``
    </Routes>
  );
};
