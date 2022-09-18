import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Popper = ({ children, className, delay, render, ...rest }) => {
  return (
    <div className={cx('popper', className)}>
      <Tippy
        appendTo={'parent'}
        interactive
        delay={delay}
        render={render}
        {...rest}
      >
        {children}
      </Tippy>
    </div>
  );
};

Popper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.array,
  render: PropTypes.func.isRequired,
};

Popper.defaultProps = {
  delay: [0, 400],
};

export default Popper;
