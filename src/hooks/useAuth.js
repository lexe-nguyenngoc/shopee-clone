import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSelector,
  resetAuth,
  signInRequest,
} from '~/features/Auth/authSlice';
import { cookies } from '~/utils';

const useAuth = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  const onSignIn = useCallback((data) => {
    dispatch(signInRequest(data));
  }, []);

  const onSignOut = useCallback(() => {
    dispatch(resetAuth());
    cookies.removeItem('auth');
  }, []);

  return {
    auth,
    isAuthentication: !!auth.data?.token,
    onSignIn,
    onSignOut,
  };
};

export default useAuth;
