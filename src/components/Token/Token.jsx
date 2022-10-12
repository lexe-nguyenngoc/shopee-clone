import React, { useEffect } from 'react';
import { useAuth } from '~/hooks';
import { http } from '~/services';

const Token = () => {
  const { isAuthentication, auth } = useAuth();

  useEffect(() => {
    if (isAuthentication) {
      http.default.defaults.headers.Authorization = `Bearer ${auth.data.token}`;

      return;
    }

    delete http.default.defaults.headers.Authorization;
  }, [auth.data.token, isAuthentication]);

  return <></>;
};

export default Token;
