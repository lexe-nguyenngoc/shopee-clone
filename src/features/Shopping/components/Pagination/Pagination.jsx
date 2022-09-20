import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ArrowLeftIcon, ArrowRightIcon } from '~/assets/svgs';

import styles from './Pagination.module.scss';
import { useQuery } from '~/hooks';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const generatePagination = (page, totalPages) => {
  const pages = [];

  if (page <= 5) {
    let length = 0;
    if (totalPages < 4) length = totalPages;
    else if (page < 4) length = 5;
    else length = page + 2;

    Array.from({
      length: length,
    }).forEach((_, index) => {
      pages.push(index + 1);
    });
  } else {
    pages.push(1, 2, null);

    let length = page + 2;
    if (length >= totalPages) length = totalPages;

    for (
      let number = length === totalPages ? totalPages - 4 : page - 2;
      number <= length;
      number++
    ) {
      pages.push(number);
    }
  }

  if (pages[pages.length - 1] < totalPages) {
    pages.push(null);
  }

  return pages;
};

const Pagination = ({ _limit, _page, _totalRows }) => {
  const { query, onAddQuery } = useQuery();

  const totalPages = Math.ceil(_totalRows / _limit);

  const pages = generatePagination(_page, totalPages);

  const page = parseInt(query.page) ?? _page;

  const handlePageChange = (page) => {
    onAddQuery({ page });
  };

  useEffect(() => {
    onAddQuery({ page: _page });
  }, [_page]);

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pagination__btn')}
        disabled={page === 1}
        onClick={() => {
          if (page <= 1) return;

          handlePageChange(page - 1);
        }}
      >
        <ArrowLeftIcon />
      </button>
      {pages.map((item, index) => {
        if (item) {
          return (
            <button
              key={index}
              className={cx('pagination__btn', { active: page === item })}
              disabled={page === item}
              onClick={() => {
                if (page === item) return;

                handlePageChange(item);
              }}
            >
              {item}
            </button>
          );
        }

        return (
          <button key={index} className={cx('pagination__btn')}>
            ...
          </button>
        );
      })}
      <button
        className={cx('pagination__btn')}
        disabled={page === totalPages}
        onClick={() => {
          if (page >= totalPages) return;

          handlePageChange(page + 1);
        }}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  _limit: PropTypes.number,
  _page: PropTypes.number,
  _totalRows: PropTypes.number,
};

Pagination.defaultProps = {
  _limit: 10,
  _page: 1,
  _totalRows: 1,
};

export default Pagination;
