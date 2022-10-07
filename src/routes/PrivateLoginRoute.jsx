import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth, useQuery } from '~/hooks';
import { shopping } from '.';

const PrivateLoginRoute = ({ children }) => {
  const { isAuthentication } = useAuth();
  const { query } = useQuery();

  return isAuthentication ? (
    <Navigate to={query._back || shopping.index} />
  ) : (
    children
  );
};

export default PrivateLoginRoute;
