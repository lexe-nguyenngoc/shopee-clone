import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './SearchSuggest.module.scss';

const cx = classNames.bind(styles);

const SearchSuggest = (props) => {
  return <div className={cx('search-suggest')}>search suggest</div>;
};

SearchSuggest.propTypes = {};

SearchSuggest.defaultProps = {};

export default SearchSuggest;
