import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { ShopeePlaceholder } from '~/assets/svgs';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({
  className,
  src: customSrc,
  alt,
  fallback: customFallback,
  ...rest
}) => {
  const [src, setSrc] = useState();
  const [loaded, setLoaded] = useState(false);

  const ref = useRef();

  const handleFallback = () => {
    if (customFallback) {
      return setSrc(customFallback());
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();

        if (!customSrc) return handleFallback();
        setSrc(customSrc);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [customSrc]);

  return (
    <div className={cx(className, 'image')} ref={ref} {...rest}>
      <img
        src={src}
        alt={alt}
        onError={handleFallback}
        onLoad={() => {
          if (src) setLoaded(true);
        }}
      />
      {(!loaded || !src) && (
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
