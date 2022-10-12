import classNames from 'classnames/bind';

import { CartIcon, LogoIcon } from '~/assets/svgs';

import Container from '~/layouts/components/Container';
import Button from '~/components/Button';

import Navbar from './Navbar';

import styles from './Header.module.scss';
import Search from './Search';
import FeaturedSearch from './FeaturedSearch';
import { useAuth } from '~/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, shopping } from '~/routes';
import Popper from '~/components/Popper';
import Cart from '../Cart';

const cx = classNames.bind(styles);

const Header = () => {
  const { isAuthentication } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    let path = '/cart';
    if (!isAuthentication) {
      path = `${auth.index}/${auth.signIn}?_back=${location.pathname}`;
    }

    navigate(path);
  };

  return (
    <header className={cx('header')}>
      <Navbar />
      <Container className={cx('container', 'full')}>
        <Button to={shopping.index} className={cx('logo')}>
          <LogoIcon />
        </Button>
        <section className={cx('header__search')}>
          <Search />
          <FeaturedSearch />
        </section>
        <Popper
          className={cx('cart-popper')}
          placement='bottom-end'
          offset={[2, 10]}
          render={() => <Cart />}
        >
          <Button
            className={cx('cart')}
            color='white'
            onClick={handleCardClick}
          >
            <CartIcon />
          </Button>
        </Popper>
      </Container>
    </header>
  );
};

export default Header;
