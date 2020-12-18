import React from 'react';
import AuthProvider from './src/context/AuthenticateContext';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/RoutesMain';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
    
  );
}
