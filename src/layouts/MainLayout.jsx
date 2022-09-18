import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
