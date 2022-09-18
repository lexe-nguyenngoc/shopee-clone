import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children, className, ...rest }) => {
  return (
    <div className={cx('wrapper', className)} {...rest}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {};

export default Wrapper;
