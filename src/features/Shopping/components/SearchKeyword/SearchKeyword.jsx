import classNames from 'classnames/bind';
import { LightBulbIcon } from '~/assets/svgs';
import { useQuery } from '~/hooks';

import styles from './SearchKeyword.module.scss';

const cx = classNames.bind(styles);

const SearchKeyword = () => {
  const { query } = useQuery();

  if (!query.q) return <></>;

  return (
    <div className={cx('search-keyword')}>
      <LightBulbIcon />
      <p>
        Kết quả tìm kiếm cho từ khóa '<span>{query.q}</span>'
      </p>
    </div>
  );
};

export default SearchKeyword;
