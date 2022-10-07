/* eslint-disable jsx-a11y/anchor-has-content */

import classNames from 'classnames/bind';
import images from '~/assets/images';

import { HelpIcon, LanguageIcon, NotificationIcon } from '~/assets/svgs';

import { useAuth } from '~/hooks';
import { uid } from '~/utils';
import { auth as authRoute } from '~/routes';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Popper, { Wrapper } from '~/components/Popper';
import Container from '~/layouts/components/Container';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Navbar = () => {
  const { auth, isAuthentication, onSignOut } = useAuth();

  const handleRenderUserOption = (attrs) => {
    const options = [
      {
        id: uid(),
        label: 'Tài khoản của tôi',
      },
      {
        id: uid(),
        label: 'Đơn mua',
      },
      {
        id: uid(),
        label: 'Đăng xuất',
        onClick: onSignOut,
      },
    ];

    return (
      <Wrapper arrow className={cx('user-menu')}>
        {options.map((item) => {
          return (
            <button
              key={item.id}
              className={cx('user-menu__item')}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          );
        })}
      </Wrapper>
    );
  };

  return (
    <Container className={cx('container')}>
      <nav className={cx('navbar')}>
        <Button
          href='https://banhang.shopee.vn/'
          target='_blank'
          className={cx('navbar__item')}
          color='white'
        >
          Kênh người bán
        </Button>
        <Button
          href='https://banhang.shopee.vn/'
          target='_blank'
          className={cx('navbar__item', 'separate')}
          color='white'
        >
          Trở thành Người bán Shopee
        </Button>
        <Button className={cx('navbar__item', 'separate')} color='white'>
          Tải ứng dụng
        </Button>
        <div className={cx('navbar__item', 'separate')}>
          Kết nối
          <a
            className={cx('navbar__item-icon', 'facebook')}
            href='https://www.facebook.com/ShopeeVN'
            target={'_blank'}
            rel='noreferrer'
          />
          <a
            className={cx('navbar__item-icon', 'instagram')}
            href='https://instagram.com/Shopee_VN'
            target={'_blank'}
            rel='noreferrer'
          />
        </div>
      </nav>

      <nav className={cx('navbar')}>
        <Button className={cx('navbar__item')} color='white'>
          <NotificationIcon className={cx('notification')} />
          Thông báo
        </Button>
        <Button
          href='https://help.shopee.vn/portal'
          target='_blank'
          className={cx('navbar__item')}
          color='white'
        >
          <HelpIcon />
          Hỗ trợ
        </Button>
        <Button
          href='https://banhang.shopee.vn/'
          target='_blank'
          className={cx('navbar__item')}
          color='white'
        >
          <LanguageIcon />
          Tiếng việt
        </Button>
        {isAuthentication ? (
          <Popper className={cx('user-popper')} render={handleRenderUserOption}>
            <Button className={cx('navbar__item user')} color='white'>
              <div className={cx('avatar')}>
                <Image fallback={() => images.blankAvatar} />
              </div>
              <span>
                {auth.data.user?.fullName ||
                  auth.data.user?.username ||
                  auth.data.user?.email ||
                  auth.data.user?.phone}
              </span>
            </Button>
          </Popper>
        ) : (
          <>
            <Button
              to={`${authRoute.index}/${authRoute.signUp}`}
              className={cx('navbar__item')}
              color='white'
            >
              Đăng ký
            </Button>
            <Button
              to={`${authRoute.index}`}
              className={cx('navbar__item', 'separate')}
              color='white'
            >
              Đăng nhập
            </Button>
          </>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
