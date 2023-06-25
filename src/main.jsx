import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';


// abdev.us.auth0.com
// cnORFduqR3fW0jqhI78OZHbFSt306e7y

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Auth0Provider
  domain="dev-6hv8lhfcgo6bgn1c.us.auth0.com"
  clientId="vNnjhQHkDMBlyfhi2O0aoB43Y795qsXR"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <UserProvider>

    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  
    </UserProvider>
    </Auth0Provider>
);
