import { UPDATE, CLEAR } from '../constants';

export const updateResult = inputValue => ({
  type: UPDATE,
  payload: {
    inputValue,
  },
});

export const clearResult = () => ({
  type: CLEAR,
});
