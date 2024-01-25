import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ShoppingProvider from './context/shopping-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
