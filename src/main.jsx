import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@components/App';
import { BrowserRouter } from 'react-router-dom';
import './styles/base.scss';
import { DatePickerProvider } from '@contexts/DatePickerContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/grand-silver">
      <DatePickerProvider>
        <App />
      </DatePickerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
