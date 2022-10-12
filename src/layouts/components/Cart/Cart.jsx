import classNames from 'classnames/bind';

import { useAuth } from '~/hooks';

import images from '~/assets/images';

import { Wrapper } from '~/components/Popper';

import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, getCartRequest } from '~/layouts/layoutSlice';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Cart = () => {
  const { isAuthentication } = useAuth();

  const { data } = useSelector(cartSelector);
  const dispatch = useDispatch();

  console.log({ data });

  useEffect(() => {
    if (!isAuthentication) return;

    dispatch(getCartRequest());
  }, [dispatch, isAuthentication]);

  console.log({ data });

  return (
    <Wrapper arrow className={cx('wrapper')}>
      {isAuthentication && data?.length !== 0 ? (
        <></>
      ) : (
        <div className={cx('no-auth')}>
          <div
            className={cx('image')}
            style={{ backgroundImage: `url(${images.cartAuth})` }}
          />
          <h3 className={cx('heading')}>Chưa có sản phẩm</h3>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;
