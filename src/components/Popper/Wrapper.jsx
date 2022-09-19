import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children, arrow, className, ...rest }) => {
  return (
    <div className={cx('wrapper', className, { arrow })} {...rest}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  arrow: false,
};

export default Wrapper;
