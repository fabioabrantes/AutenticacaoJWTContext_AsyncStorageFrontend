import React from 'react';
import {useAuth} from '../context/AuthenticateContext';
import AuthRoutes from './routes.auth';
import AppRoutes from './routes.app';


const RoutesMain: React.FC = () => {
  const {signed} = useAuth();
  console.log(signed);
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default RoutesMain;