import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from '~/layouts/components/Header';
import Container from './components/Container';

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
