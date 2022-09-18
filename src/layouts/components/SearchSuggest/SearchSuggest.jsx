import { memo } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './SearchSuggest.module.scss';
import { sanitizeDOM } from '~/utils';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchSuggest = ({ data, keyword }) => {
  if (data.length === 0) return <></>;

  return (
    <div className={cx('search-suggest')}>
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/search?q=${item.name}`}
            className={cx('search-suggest__item')}
            dangerouslySetInnerHTML={{
              __html: sanitizeDOM(
                item?.name.replace(
                  new RegExp(keyword, 'i'),
                  (match) => `<span>${match}</span>`
                )
              ),
            }}
          />
        );
      })}
    </div>
  );
};

SearchSuggest.propTypes = {
  data: PropTypes.array.isRequired,
  keyword: PropTypes.string,
};

SearchSuggest.defaultProps = {};

export default memo(SearchSuggest);
