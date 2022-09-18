import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Redirect.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Redirect = ({ label, to, text }) => {
  return (
    <div className={cx('redirect')}>
      <span className={cx('redirect__label')}>{label}</span>
      <Button to={to} className={cx('redirect__text')} color='primary'>
        {text}
      </Button>
    </div>
  );
};

Redirect.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Redirect;
