import classNames from 'classnames/bind';

import { shopping } from '~/routes';
import { uid } from '~/utils';

import Button from '~/components/Button';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const FeaturedSearch = () => {
  const data = [
    {
      id: uid(),
      label: 'áo khoác',
    },
    {
      id: uid(),
      label: 'dép',
    },
    {
      id: uid(),
      label: 'túi xách nữ',
    },
    {
      id: uid(),
      label: 'tai nghe bluetooth',
    },
    {
      id: uid(),
      label: 'ốp iphone',
    },
    {
      id: uid(),
      label: 'váy',
    },
    {
      id: uid(),
      label: 'quần jean nam',
    },
    {
      id: uid(),
      label: 'balo',
    },
  ];
  return (
    <div className={cx('featured-search')}>
      {data.map((item) => (
        <Button
          key={item.id}
          className={cx('featured-search__item')}
          to={`${shopping.index}?q=${item.label}`}
          color='white'
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default FeaturedSearch;
