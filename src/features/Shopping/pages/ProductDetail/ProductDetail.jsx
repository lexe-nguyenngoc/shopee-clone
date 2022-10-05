import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';
import Container from '~/layouts/components/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductRequest, getProductSelector } from '../../shoppingSlice';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useSelector(getProductSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest({ id }));
  }, [id]);

  return (
    <Container>
      <div className={cx('wrapper')}>page {id}</div>
    </Container>
  );
};

export default ProductDetail;
