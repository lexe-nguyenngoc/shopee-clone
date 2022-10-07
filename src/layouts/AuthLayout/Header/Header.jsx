import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import { shopping } from '~/routes';

import { LogoIcon } from '~/assets/svgs';

import Button from '~/components/Button';
import Container from '~/layouts/components/Container';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const title = {
  '/auth/sign-in': 'Đăng nhập',
  '/auth/sign-up': 'Đăng ký',
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={cx('header')}>
      <Container className={cx('header__container')}>
        <div className={cx('header__left')}>
          <Button to={shopping.index} className={cx('header__logo')}>
            <LogoIcon />
          </Button>
          <h1 className={cx('header__heading')}>{title[pathname]}</h1>
        </div>

        <Button
          className={cx('header__link')}
          href={'https://help.shopee.vn/portal'}
          target={'_blank'}
          color={'primary'}
        >
          Bạn cần giúp đỡ?
        </Button>
      </Container>
    </header>
  );
};

export default Header;
