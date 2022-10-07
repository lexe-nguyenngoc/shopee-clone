import classNames from 'classnames/bind';

import { useLockBodyScroll } from '~/hooks';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const MainLazyLoading = () => {
  useLockBodyScroll();

  return (
    <div className={cx('main-lazy-loading')}>
      <div className={cx('dots')}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default MainLazyLoading;
