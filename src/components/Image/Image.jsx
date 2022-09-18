import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import images from '~/assets/images';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ className, src, alt, fallback: customFallback }) => {
  const [fallback, setFallback] = useState();

  const handleFallback = () => {
    if (customFallback) {
      return setFallback(customFallback());
    }

    setFallback(images.blankImage);
  };

  useEffect(() => {
    if (!src) handleFallback();
  }, [src, customFallback]);

  return (
    <img
      className={cx(className, 'image')}
      src={fallback || src}
      alt={alt}
      onError={handleFallback}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.func,
};

Image.defaultProps = {};

export default Image;
