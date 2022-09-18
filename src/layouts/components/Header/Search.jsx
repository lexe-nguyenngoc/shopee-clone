import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { SearchIcon } from '~/assets/svgs';
import Popper, { Wrapper } from '~/components/Popper';
import SearchSuggest from '../SearchSuggest';
import { useQuery } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  suggestKeywordRequest,
  suggestKeywordSelector,
} from '~/layouts/layoutSlice';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

const Search = (props) => {
  const suggestKeywords = useSelector(suggestKeywordSelector);
  const dispatch = useDispatch();

  const { query, onAddQuery } = useQuery();

  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState(query.q || '');

  const keywordDebounced = useDebounce(keyword, 500);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleRender = (attrs) => {
    return (
      <Wrapper className={cx('wrapper')} {...attrs}>
        <SearchSuggest data={suggestKeywords.data} keyword={keywordDebounced} />
      </Wrapper>
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = keyword.trim().replace(/ +/g, ' ');
    if (q) onAddQuery({ name_like: q });
  };

  useEffect(() => {
    if (keywordDebounced) {
      dispatch(suggestKeywordRequest(keywordDebounced));
    }
  }, [keywordDebounced]);

  return (
    <Popper
      visible={isFocus && suggestKeywords.data.length > 0}
      onClickOutside={() => setIsFocus(false)}
      className={cx('popper')}
      placement='bottom-start'
      offset={[0, 8]}
      render={handleRender}
    >
      <form className={cx('search')} onSubmit={handleSearch}>
        <input
          className={cx('search__control')}
          type={'text'}
          placeholder='Tìm sản phẩm, thương hiệu và tên shop...'
          value={keyword}
          onChange={handleKeywordChange}
          onFocus={() => setIsFocus(true)}
        />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
    </Popper>
  );
};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
