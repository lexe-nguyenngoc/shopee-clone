import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/hooks';

const PrivateLoginRoute = ({ children }) => {
  const { isAuthentication } = useAuth();

  return isAuthentication ? <Navigate to='/' /> : children;
};

export default PrivateLoginRoute;
