import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import LoginForm from './LoginForm/LoginForm';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const RoomsPage = lazy(() => import('../pages/RoomsPage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const ContactsPage = lazy(()=> import('../pages/ContactsPage'));
const NoPage = lazy(() => import('../pages/NoPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
