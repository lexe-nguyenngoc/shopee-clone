import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '~/hooks';
import { auth } from '.';

const PrivateRoute = ({ children }) => {
  const { isAuthentication } = useAuth();

  return isAuthentication ? children : <Navigate to={auth.index} />;
};

export default PrivateRoute;
