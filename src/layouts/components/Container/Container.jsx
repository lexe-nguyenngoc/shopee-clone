import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

const Container = ({ children, fluid, className }) => {
  return (
    <div
      className={cx('container', className, {
        fluid,
      })}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
