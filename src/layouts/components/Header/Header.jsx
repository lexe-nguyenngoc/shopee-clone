import classNames from 'classnames/bind';

import { CartIcon, LogoIcon } from '~/assets/svgs';

import Container from '~/layouts/components/Container';
import Button from '~/components/Button';

import Navbar from './Navbar';

import styles from './Header.module.scss';
import Search from './Search';
import FeaturedSearch from './FeaturedSearch';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <Navbar />
      <Container className={cx('container', 'full')}>
        <Button to='/' className={cx('logo')}>
          <LogoIcon />
        </Button>
        <section className={cx('header__search')}>
          <Search />
          <FeaturedSearch />
        </section>
        <Button className={cx('cart')} color='white'>
          <CartIcon />
        </Button>
      </Container>
    </header>
  );
};

export default Header;
