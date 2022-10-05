import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';
import Container from '~/layouts/components/Container';

const cx = classNames.bind(styles);

const ProductDetail = (props) => {
  return (
    <Container>
      <div className={cx('wrapper')}>page</div>
    </Container>
  );
};

ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
