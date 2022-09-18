import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Tooltip.module.scss';

const cx = classNames.bind(styles);

const Tooltip = ({ children, content }) => {
  return <Tippy content={content}>{children}</Tippy>;
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {};

export default Tooltip;
