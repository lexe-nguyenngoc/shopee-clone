import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const FormGroup = ({ children, required, id, className, label, message }) => {
  return (
    <div className={cx('form-group', className)}>
      {label && (
        <label htmlFor={id} className={cx('label', required)}>
          {label}
        </label>
      )}
      {children}
      <span className={cx('message')}>{message}</span>
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
};

export default FormGroup;
