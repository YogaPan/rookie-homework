import { UPDATE, CLEAR } from '../constants';

const initialState = {
  result: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return { result: action.payload.inputValue };
    case CLEAR:
      return { result: 0 };
    default:
      return state;
  }
};

export default rootReducer;
