import { useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { SearchIcon } from '~/assets/svgs';
import Popper, { Wrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const Search = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleRender = (attrs) => {
    return (
      <Wrapper className={cx('wrapper')} {...attrs}>
        Hello world !!!
      </Wrapper>
    );
  };

  return (
    <Popper
      visible={isFocus}
      onClickOutside={() => setIsFocus(false)}
      className={cx('popper')}
      placement='bottom-start'
      offset={[0, 8]}
      render={handleRender}
    >
      <form className={cx('search')}>
        <input
          className={cx('search__control')}
          type={'text'}
          placeholder='Tìm sản phẩm, thương hiệu và tên shop...'
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
