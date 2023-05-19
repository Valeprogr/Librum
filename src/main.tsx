import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';





const VITE_DOMAIN= import.meta.env.VITE_AUTH0_DOMAIN;
const VITE_CLIENT_ID= import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
        domain={VITE_DOMAIN}
        clientId={VITE_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <App />
    </Auth0Provider>
)
