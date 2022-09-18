import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, signInRequest } from '~/features/Auth/authSlice';

const useAuth = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  const onSignIn = useCallback((data) => {
    dispatch(signInRequest(data));
  }, []);

  return {
    auth,
    isAuthentication: auth.data?.token,
    onSignIn,
  };
};

export default useAuth;
