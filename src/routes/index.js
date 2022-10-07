import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import MainLayout, { AuthLayout } from '~/layouts';

import PrivateLoginRoute from './PrivateLoginRoute';

const SignIn = lazy(() => import('~/features/Auth/pages/SignIn'));
const SignUp = lazy(() => import('~/features/Auth/pages/SignUp'));
const Home = lazy(() => import('~/features/Shopping/pages/Home'));
const ProductDetail = lazy(() =>
  import('~/features/Shopping/pages/ProductDetail')
);

export const shopping = {
  index: '/',
  product: 'product',
};

export const auth = {
  index: '/auth',
  signIn: 'sign-in',
  signUp: 'sign-up',
};

const routes = [
  {
    path: shopping.index,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Home />,
      },
      {
        path: `${shopping.product}/:id`,
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: auth.index,
    element: (
      <PrivateLoginRoute>
        <AuthLayout />
      </PrivateLoginRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={`${auth.index}/${auth.signIn}`} />,
      },
      {
        path: auth.signIn,
        element: <SignIn />,
      },
      {
        path: auth.signUp,
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
