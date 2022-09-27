import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import { StarEmptyIcon, StarIcon } from '~/assets/svgs';
import { uid } from '~/utils';

import styles from './Rating.module.scss';

const cx = classNames.bind(styles);

const Rating = ({ value, size }) => {
  const starCount = Math.ceil(value);

  return (
    <div className={cx('rating')}>
      {Array.from({ length: starCount }).map(() => (
        <StarIcon key={uid()} style={{ width: size, height: size }} />
      ))}
      {5 - starCount > 0 &&
        Array.from({ length: 5 - starCount }).map(() => (
          <StarEmptyIcon key={uid()} style={{ width: size, height: size }} />
        ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
  size: 10,
};

export default Rating;
