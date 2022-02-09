import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import { IDENTITY_CONFIG, METADATA_OIDC } from "../src/oidc.js";
import { OidcClient } from 'oidc-client';


// if (process.env.NODE_ENV === "production"){
//   process.env.NODE_ENV = 'development';
// }

console.log (process.env.NODE_ENV)
console.log('redirectUri: '+ window.location.origin + '/callback');


ReactDOM.render(
    <Auth0Provider
      domain = {IDENTITY_CONFIG.login}
      clientId= {IDENTITY_CONFIG.client_id}
      redirectUri= {IDENTITY_CONFIG.redirect_uri}
      scope= {IDENTITY_CONFIG.scope}
      responseType= 'code'
      onRedirectCallback = 'https://id-sandbox.cashtoken.africa/oauth'
      
      
      >
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);



