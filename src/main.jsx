import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';
import 'leaflet/dist/leaflet.css';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
