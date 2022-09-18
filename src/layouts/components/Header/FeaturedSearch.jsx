import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { uid } from '~/utils';
import Button from '~/components/Button';

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
          to={`/search?q=${item.label}`}
          color='white'
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default FeaturedSearch;
