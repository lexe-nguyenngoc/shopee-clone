import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import FormGroup from './FormGroup';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const InputField = ({
  required,
  id,
  className,
  label,
  message,
  type,
  name,
  register,
  ...rest
}) => {
  return (
    <FormGroup
      required={required}
      id={id}
      className={className}
      label={label}
      message={message}
    >
      <div className={cx('control')}>
        <input
          id={id}
          className={cx('field', { error: !!message })}
          type={type}
          name={name}
          {...rest}
          {...register(name)}
        />
      </div>
    </FormGroup>
  );
};

InputField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
};

InputField.defaultProps = {
  required: true,
  type: 'text',
  register: () => {},
};

export default InputField;
