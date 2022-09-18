import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { SearchIcon } from '~/assets/svgs';
import Tooltip from '~/components/Tooltip';

const cx = classNames.bind(styles);

const Search = (props) => {
  return (
    <form className={cx('search')}>
      <input
        className={cx('search__control')}
        type={'text'}
        placeholder='Tìm sản phẩm, thương hiệu và tên shop...'
      />
      <button type='submit'>
        <SearchIcon />
      </button>
    </form>
  );
};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
