import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Error.module.scss';
import { CloseIcon } from '~/assets/svgs';

const cx = classNames.bind(styles);

const Error = ({ error }) => {
  if (!error) return <></>;
  return (
    <div className={cx('error')}>
      <CloseIcon />
      <span>{error}</span>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {};

export default Error;
