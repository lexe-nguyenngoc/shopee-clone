import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '~/hooks';

const PrivateRoute = ({ children }) => {
  const { isAuthentication } = useAuth();

  return isAuthentication ? children : <Navigate to='/auth' />;
};

export default PrivateRoute;
