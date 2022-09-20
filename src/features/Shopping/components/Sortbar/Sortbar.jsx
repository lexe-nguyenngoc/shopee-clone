import classNames from 'classnames/bind';

import styles from './Sortbar.module.scss';
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '~/assets/svgs';
import Popper, { Wrapper } from '~/components/Popper';
import { useQuery } from '~/hooks';

const cx = classNames.bind(styles);

const options = [
  {
    id: 1,
    label: 'Liên quan',
    sortBy: 'relevancy',
    default: true,
  },
  {
    id: 2,
    label: 'Mới nhất',
    sortBy: 'ctime',
  },
  {
    id: 3,
    label: 'Bán chạy',
    sortBy: 'sales',
  },
  {
    id: 4,
    label: 'Giá',
    sortBy: 'price',
    children: [
      {
        id: 1,
        label: 'Thấp đến Cao',
        orderBy: 'desc',
      },
      {
        id: 2,
        label: 'Cao đến Thấp',
        orderBy: 'asc',
      },
    ],
  },
];

const Sortbar = () => {
  const { query, onAddQuery } = useQuery();

  return (
    <div className={cx('sort-bar')}>
      <h3 className={cx('heading')}>Sắp xếp theo</h3>
      <div className={cx('option-group')}>
        {options.map((option) => {
          if (!option.children)
            return (
              <button
                key={option.id}
                className={cx('option', {
                  active:
                    query.sortBy === option.sortBy ||
                    (option.default && !query.sortBy),
                })}
                onClick={() => {
                  onAddQuery({ sortBy: option.sortBy }, false, ['orderBy']);
                }}
              >
                {option.label}
              </button>
            );

          return (
            <Popper
              key={option.id}
              placement='bottom'
              offset={[0, 2]}
              render={() => (
                <Wrapper className={cx('dropdown')}>
                  {option.children.map((item) => (
                    <button
                      key={item.id}
                      className={cx('option', 'item', {
                        active:
                          query.orderBy === item.orderBy &&
                          option.sortBy === query.sortBy,
                      })}
                      onClick={() =>
                        onAddQuery({
                          sortBy: option.sortBy,
                          orderBy: item.orderBy,
                        })
                      }
                    >
                      {option.label} : {item.label}
                    </button>
                  ))}
                </Wrapper>
              )}
            >
              <div className={cx('option', 'more')}>
                {option.label}
                <ArrowDownIcon />
              </div>
            </Popper>
          );
        })}
        {/* <button className={cx('option', 'active')}>Liên quan</button>
        <button className={cx('option')}>Mới nhất</button>
        <button className={cx('option')}>Bán chạy</button>
        <Popper
          placement='bottom'
          offset={[0, 2]}
          render={(attrs) => (
            <Wrapper className={cx('dropdown')}>
              <button className={cx('option', 'item')}>
                Giá: Thấp đến Cao
              </button>
              <button className={cx('option', 'item')}>
                Giá: Cao đến Thấp
              </button>
            </Wrapper>
          )}
        >
          <div className={cx('option', 'more')}>
            Giá
            <ArrowDownIcon />
          </div>
        </Popper>*/}
      </div>
      <div className={cx('pagination')}>
        <button className={cx('pagination__item', 'prev')} disabled>
          <ArrowLeftIcon />
        </button>
        <button className={cx('pagination__item', 'next')}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Sortbar;
