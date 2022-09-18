import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '~/constants';

export const ROOT_STATE_NAME = 'layout';

const initialState = {
  suggestKeyword: {
    status: httpStatus.IDLE,
    data: [],
    error: null,
  },
};

const layoutSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    suggestKeywordRequest: (state) => {
      state.suggestKeyword.status = httpStatus.LOADING;
    },
    suggestKeywordSuccess: (state, action) => {
      if (
        JSON.stringify(state.suggestKeyword.data) !==
        JSON.stringify(action.payload)
      ) {
        state.suggestKeyword.data = action.payload;
      }

      state.suggestKeyword.status = httpStatus.SUCCESS;
      state.suggestKeyword.error = null;
    },
    suggestKeywordFailed: (state, action) => {
      state.suggestKeyword.status = httpStatus.FAIL;
      state.suggestKeyword.error = action.payload;
    },
  },
});

export const suggestKeywordSelector = (state) =>
  state[ROOT_STATE_NAME].suggestKeyword;
export const {
  suggestKeywordRequest,
  suggestKeywordSuccess,
  suggestKeywordFailed,
} = layoutSlice.actions;
export default layoutSlice.reducer;
