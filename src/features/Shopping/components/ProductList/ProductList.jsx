import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';

import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

const ProductList = ({ data }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className={cx('card-list')}>
      {data.map((item) => (
        <div className={cx('col')} key={item.id}>
          <Card item={item} onClick={handleItemClick} />
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

export default ProductList;
