import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import MainLayout, { AuthLayout } from '~/layouts';

import PrivateLoginRoute from './PrivateLoginRoute';

const SignIn = lazy(() => import('~/features/Auth/pages/SignIn'));
const SignUp = lazy(() => import('~/features/Auth/pages/SignUp'));

const routes = [
  {
    path: '/',

    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Home page</div>,
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <PrivateLoginRoute>
        <AuthLayout />
      </PrivateLoginRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='/auth/sign-in' />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
