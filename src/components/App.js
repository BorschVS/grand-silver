import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const RoomsPage = lazy(() => import('../pages/RoomsPage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));
const NoPage = lazy(() => import('../pages/NoPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
