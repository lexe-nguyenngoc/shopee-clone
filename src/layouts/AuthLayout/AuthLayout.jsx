import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

const AuthLayout = () => {
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

export default AuthLayout;
