import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import Image from '~/components/Image';
import { formatter } from '~/utils';
import Rating from '~/components/Rating/Rating';

const cx = classNames.bind(styles);

const Card = ({ item, onClick }) => {
  const handleCardClick = () => {
    if (!onClick) return;

    onClick(item);
  };

  return (
    <div className={cx('card', { click: !!onClick })} onClick={handleCardClick}>
      <div className={cx('card__img')}>
        <Image
          src={item.thumbnail}
          alt={item.name}
          className={cx('img')}
          fallback={() => {}}
        />
      </div>

      {item.isFavorite && (
        <span className={cx('card__favorite')}>Yêu thích+</span>
      )}
      {item.discount > 0 && (
        <div className={cx('card__discount')}>
          <div>{item.discount}%</div>
          <div className={cx('label')}>GIẢM</div>
        </div>
      )}
      <div className={cx('card__container')}>
        <h3 className={cx('card__name')}>{item.name}</h3>
        <div className={cx('card__tags')}>
          {item?.tags?.map((tag) => (
            <span key={tag} className={cx('card__tag')}>
              {tag}
            </span>
          ))}
        </div>
        <div className={cx('card__group', 'price')}>
          <span className={cx('card__price')}>
            {formatter.price(item.price)}
          </span>
          <span className={cx('card__price', 'sell')}>
            {formatter.price(item.sellPrice)}
          </span>
        </div>
        <div className={cx('card__group')}>
          <Rating value={item.ratingAverage} />
          <span className={cx('card__sold')}>đã bán {item.soldQuantity}</span>
        </div>
        <span className={cx('card__address')}>{item.address}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Card;
