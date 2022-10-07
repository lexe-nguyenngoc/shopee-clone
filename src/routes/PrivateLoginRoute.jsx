import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth, useQuery } from '~/hooks';

const PrivateLoginRoute = ({ children }) => {
  const { isAuthentication } = useAuth();
  const { query } = useQuery();

  return isAuthentication ? <Navigate to={query._back || '/'} /> : children;
};

export default PrivateLoginRoute;
