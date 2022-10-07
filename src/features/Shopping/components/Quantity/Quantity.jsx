import PropTypes from 'prop-types';
import { PlusIcon, ReduceIcon } from '~/assets/svgs';

import classNames from 'classnames/bind';

import styles from './Quantity.module.scss';

const cx = classNames.bind(styles);

const Quantity = ({ value, onChange, min, max }) => {
  const handleReduce = () => {
    if (value <= min || !onChange || typeof onChange !== 'function') return;
    onChange(value - 1);
  };
  const handlePlus = () => {
    if (value >= max || !onChange || typeof onChange !== 'function') return;
    onChange(value + 1);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!newValue) {
      if (value === min) return;

      return onChange(1);
    }

    if (
      !/^[0-9]+$/.test(newValue) ||
      value === newValue ||
      !onChange ||
      typeof onChange !== 'function'
    )
      return;

    if (newValue < min) {
      return onChange(min);
    }

    if (newValue > max) {
      return onChange(max);
    }

    onChange(parseInt(e.target.value));
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('control')}>
        <button className={cx('btn')} onClick={handleReduce}>
          <ReduceIcon />
        </button>
        <input type={'text'} value={value} onChange={handleChange} />
        <button className={cx('btn')} onClick={handlePlus}>
          <PlusIcon />
        </button>
      </div>
      <div className={cx('label')}>{max} sản phẩm có sẵn</div>
    </div>
  );
};

Quantity.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

Quantity.defaultProps = {
  min: 1,
  max: 100,
};

export default Quantity;
