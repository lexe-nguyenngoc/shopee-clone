import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CheckboxIcon } from '~/assets/svgs';

import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

const Checkbox = ({ checked, id, label, onChange }) => {
  const [value, setValue] = useState(false);

  const handleChange = () => {
    if (onChange) return onChange(!checked);

    setValue((prevState) => !prevState);
  };

  return (
    <div className={cx('checkbox')}>
      <input
        hidden
        id={id}
        type='checkbox'
        value={checked ?? value}
        onChange={handleChange}
      />
      <div className={cx('checkbox__icon')}>
        {(checked ?? value) && <CheckboxIcon />}
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Checkbox;
