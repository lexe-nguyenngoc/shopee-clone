import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ActiveIcon } from '~/assets/svgs';

import styles from './Option.module.scss';

const cx = classNames.bind(styles);

const Option = ({ data, selectedItem, onItemClick }) => {
  const handleItemClick = (item) => {
    if (!onItemClick || typeof onItemClick !== 'function') return;

    if (item.id === selectedItem.id) {
      onItemClick({});
      return;
    }

    onItemClick(item);
  };

  return (
    <div className={cx('option')}>
      {data.map((item) => {
        const active = selectedItem.id === item.id;

        return (
          <button
            key={item.id}
            className={cx('item', { active })}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
            {active && (
              <div className={cx('active-icon')}>
                <ActiveIcon />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

Option.propTypes = {
  data: PropTypes.array,
  selectedItem: PropTypes.object,
  onItemClick: PropTypes.func,
};

Option.defaultProps = {
  data: [],
};

export default Option;
