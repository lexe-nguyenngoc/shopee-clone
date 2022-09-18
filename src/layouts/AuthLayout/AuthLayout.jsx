import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';
import Header from './Header';
import Image from '~/components/Image';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';

const cx = classNames.bind(styles);

const AuthLayout = (props) => {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

AuthLayout.propTypes = {};

AuthLayout.defaultProps = {};

export default AuthLayout;
