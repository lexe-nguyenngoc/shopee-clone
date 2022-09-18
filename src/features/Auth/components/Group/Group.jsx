import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Group.module.scss';

const cx = classNames.bind(styles);

const Group = ({ children, className }) => {
  return <div className={cx('group', className)}>{children}</div>;
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Group;
