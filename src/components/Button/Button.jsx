import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      children,
      className,
      type,
      color,
      variant,
      to,
      href,
      width,
      height,
      rounded,
      style,
      ...rest
    },
    ref
  ) => {
    let WrapComp = 'button';
    const props = { ...rest };

    if (to) {
      WrapComp = Link;
      props.to = to;
    } else if (href) {
      WrapComp = 'a';
      props.href = href;
    } else {
      props.type = type;
    }

    return (
      <WrapComp
        ref={ref}
        className={cx('btn', className, color, variant)}
        style={{
          width,
          height,
          borderRadius: `${rounded}px`,
          ...style,
        }}
        {...props}
      >
        {children}
      </WrapComp>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'default',
    'white',
  ]),
  variant: PropTypes.oneOf(['contained', 'outlined', 'normal']),
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.number,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: 'button',
  color: 'default',
  variant: 'normal',
  style: {},
};

export default Button;
