import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ className, src, alt }) => {
  return <img className={cx(className)} src={src} alt={alt} />;
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {};

export default Image;
