import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Container from '~/layouts/components/Container';
import ImageSlide from '../../components/ImageSlide';

import { getProductRequest, getProductSelector } from '../../shoppingSlice';

import styles from './ProductDetail.module.scss';

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
      <div className={cx('wrapper')}>
        <div className={cx('image-slide')}>
          <ImageSlide data={data.images} />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
