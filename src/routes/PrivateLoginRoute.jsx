import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/hooks';

const PrivateLoginRoute = ({ children }) => {
  const { auth } = useAuth();

  return auth ? <Navigate to='/' /> : children;
};

export default PrivateLoginRoute;
