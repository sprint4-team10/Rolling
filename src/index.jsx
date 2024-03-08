import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyles from './styles/ResetStyles';
import GlobalStyles from './styles/GlobalStyles';
import FontStyles from './styles/FontStyles';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <ResetStyles />
    <GlobalStyles />
    <FontStyles />
    <App />
  </HelmetProvider>,
);
