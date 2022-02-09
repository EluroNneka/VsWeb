import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthService from '../utils/OidcService';
import { User } from 'oidc-client';

const Button = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return 
  { !isAuthenticated && (
  <button
    onClick={ () => {
      loginWithRedirect()
    } }
  >
    Login
  </button>
  );
};

export default Button;
