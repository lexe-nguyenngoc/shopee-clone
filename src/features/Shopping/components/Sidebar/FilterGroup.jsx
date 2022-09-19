import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import getFilter from '~/services/filter';
import { useQuery, useToggle } from '~/hooks';
import { ArrowDownIcon } from '~/assets/svgs';

import Checkbox from '~/components/Checkbox';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const FilterGroup = ({ heading, name, path }) => {
  const [data, setData] = useState([]);
  const [collapsed, toggleCollapsed] = useToggle(true);

  const { query, onAddQuery } = useQuery();

  const handleSelected = (item) => {
    let result = [item];
    if (query[name]) {
      result.push(query[name]);
    }

    onAddQuery({ [name]: result.join(',') });
  };

  useEffect(() => {
    let cancelRequest = false;

    getFilter(path, { q: query.q }, (data) => {
      if (cancelRequest) return;
      setData(data);
    });

    return () => {
      cancelRequest = true;
    };
  }, [query.q]);

  const dataRender = collapsed ? data.slice(0, 4) : data;

  return (
    <div className={cx('filter-group')}>
      <h3 className={cx('filter-group__heading')}>{heading}</h3>
      <ul className={cx('filter-group__list')}>
        {dataRender.map((item) => {
          return (
            <li key={item}>
              <Checkbox
                id={item}
                label={item}
                onChange={() => handleSelected(item)}
                checked={query[name]?.split(',').includes(item)}
              />
            </li>
          );
        })}
        {collapsed && (
          <li>
            <button className={cx('more')} onClick={toggleCollapsed}>
              Thêm <ArrowDownIcon />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

FilterGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default FilterGroup;
