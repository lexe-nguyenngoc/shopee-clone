import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/layouts/components/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
