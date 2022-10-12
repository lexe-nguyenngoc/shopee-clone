import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  suggestKeywordRequest,
  suggestKeywordSelector,
} from '~/layouts/layoutSlice';

import { SearchIcon } from '~/assets/svgs';
import { useQuery, useDebounce } from '~/hooks';

import Popper, { Wrapper } from '~/components/Popper';
import SearchSuggest from '../SearchSuggest';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Search = (props) => {
  const suggestKeywords = useSelector(suggestKeywordSelector);
  const dispatch = useDispatch();
  const location = useLocation();

  const { query, onAddQuery } = useQuery();

  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState(query.q || '');

  const inputRef = useRef();

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

    if (query.q === q) return;

    if (query.q && !q) {
      onAddQuery({}, true);
      setIsFocus(false);
      inputRef.current.blur();
    }

    if (q) {
      onAddQuery({ q }, true);
      setIsFocus(false);
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    if (keywordDebounced) {
      dispatch(suggestKeywordRequest(keywordDebounced));
    }
  }, [keywordDebounced]);

  useEffect(() => {
    setIsFocus(false);
  }, [location]);

  useEffect(() => {
    setKeyword(query.q || '');
  }, [query.q]);

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
          ref={inputRef}
        />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
    </Popper>
  );
};

export default Search;
