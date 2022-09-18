import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Social.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Social = ({ data }) => {
  return (
    <>
      <div className={cx('separate')}>
        <div className={cx('separate__line')} />
        <span className={cx('separate__text')}>HOẶC</span>
        <div className={cx('separate__line')} />
      </div>
      <div className={cx('social')}>
        {data.map((item) => {
          return (
            <Button
              key={item}
              className={cx('social__btn')}
              variant='outlined'
              disabled
            >
              <div className={cx('icon', item)} />
              <span>{item}</span>
            </Button>
          );
        })}
      </div>
    </>
  );
};

Social.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Social;
