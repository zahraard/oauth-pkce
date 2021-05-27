import React from 'react'
import { AuthProvider, AuthService } from 'react-oauth2-pkce'

import { Routes } from './Routes';

const authService = new AuthService({
clientId:'67ca68c2-812f-4613-9f99-2ccfe7d27b35',
location: window.location,
provider: 'https://cufed.carleton.ca/adfs/oauth2/',
redirectUri: window.location.origin,
scopes: ['openid', 'profile']
});

const App = () => {
  return (
    <AuthProvider authService={authService} >
      <Routes />
    </AuthProvider>
  )
}

export default App

