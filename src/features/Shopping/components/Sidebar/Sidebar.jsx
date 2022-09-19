import classNames from 'classnames/bind';

import { FilterIcon } from '~/assets/svgs';
import { httpPaths } from '~/constants';

import FilterGroup from './FilterGroup';

import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('sidebar')}>
      <h1 className={cx('heading')}>
        <FilterIcon />
        Bộ lọc tìm kiếm
      </h1>
      <FilterGroup
        heading={'Theo danh mục'}
        name='category'
        path={httpPaths.category}
      />
      <FilterGroup
        heading={'Nơi bán'}
        name='address'
        path={httpPaths.address}
      />
    </div>
  );
};

export default Sidebar;
