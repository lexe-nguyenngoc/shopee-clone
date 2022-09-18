import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import FormGroup from './FormGroup';

import styles from './Form.module.scss';
import { useState } from 'react';
import { EyeHideIcon, EyeIcon } from '~/assets/svgs';
import useToggle from '~/hooks/useToggle';

const cx = classNames.bind(styles);

const PasswordField = ({
  required,
  id,
  className,
  label,
  message,
  name,
  register,
  ...rest
}) => {
  const [show, toggleShow] = useToggle();

  return (
    <FormGroup
      required={required}
      id={id}
      className={className}
      label={label}
      message={message}
    >
      <div className={cx('control', 'password', { error: !!message })}>
        <input
          {...rest}
          id={id}
          type={show ? 'text' : 'password'}
          name={name}
          {...register(name)}
        />
        <button type='button' onClick={toggleShow}>
          {show ? <EyeIcon /> : <EyeHideIcon />}
        </button>
      </div>
    </FormGroup>
  );
};

PasswordField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
};

PasswordField.defaultProps = {
  required: true,
  register: () => {},
};

export default PasswordField;
