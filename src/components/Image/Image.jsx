import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { ShopeePlaceholder } from '~/assets/svgs';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ className, src, alt, fallback: customFallback }) => {
  const [fallback, setFallback] = useState();
  const [loaded, setLoaded] = useState(false);

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
    <div className={cx(className, 'image')}>
      <img
        src={fallback || src}
        alt={alt}
        onError={handleFallback}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      {!loaded && (
        <div className={cx('placeholder')}>
          <ShopeePlaceholder />
        </div>
      )}
    </div>
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
