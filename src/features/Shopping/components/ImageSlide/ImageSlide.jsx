import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ArrowLeftIcon, ArrowRightIcon } from '~/assets/svgs';

import Image from '~/components/Image';

import styles from './ImageSlide.module.scss';
import { reducer } from '~/utils';
import { useMemo } from 'react';

const cx = classNames.bind(styles);

// reducer
const initialState = {
  limit: 5,
  startAt: 0,
};

const setSelectedItem = (payload) =>
  reducer.createAction('SET_SELECTED_ITEM', payload);
const nextItem = () => reducer.createAction('NEXT_ITEM');
const prevItem = () => reducer.createAction('PREV_ITEM');

const reducerHandler = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case setSelectedItem().type:
      return {
        ...state,
        selectedItem: payload,
      };

    case nextItem().type:
      return {
        ...state,
        startAt: state.startAt + state.limit,
      };

    case prevItem().type:
      return {
        ...state,
        startAt: state.startAt - state.limit,
      };

    default:
      return state;
  }
};

const ImageSlide = ({ data: customData }) => {
  const [{ selectedItem, limit, startAt }, dispatch] = useReducer(
    reducerHandler,
    initialState
  );

  const { data, isNext, isPrev } = useMemo(() => {
    if (!Array.isArray(customData) || customData.length === 0)
      return {
        data: [],
        isPrev: false,
        isNext: false,
      };

    if (customData.length <= limit)
      return {
        data: customData,
        isPrev: false,
        isNext: false,
      };

    const endpoint = startAt + limit;
    const data = customData.slice(startAt, endpoint);
    const isPrev = startAt > 0;
    const isNext = endpoint < customData.length - 1;

    return {
      data,
      isPrev,
      isNext,
    };
  }, [customData, limit, startAt]);

  useEffect(() => {
    if (data.length > 0) {
      dispatch(setSelectedItem(data[0]));
    }
  }, [data, dispatch]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <Image src={selectedItem} alt='Main image' />
      </div>

      <div className={cx('bottom')}>
        {isPrev && (
          <button
            className={cx('button', 'prev')}
            onClick={() => {
              dispatch(prevItem());
            }}
          >
            <ArrowLeftIcon />
          </button>
        )}
        {isNext && (
          <button
            className={cx('button', 'next')}
            onClick={() => {
              dispatch(nextItem());
            }}
          >
            <ArrowRightIcon />
          </button>
        )}

        <div className={cx('list')}>
          {data?.map?.((item) => (
            <div
              key={item}
              className={cx('item', { active: item === selectedItem })}
            >
              <Image
                src={item}
                alt='Image slide'
                onMouseEnter={() => dispatch(setSelectedItem(item))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageSlide.propTypes = {
  data: PropTypes.array,
};

ImageSlide.defaultProps = {
  data: [],
};

export default ImageSlide;
