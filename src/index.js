// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client en lugar de react-dom
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
