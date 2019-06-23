import { UPDATE, CLEAR } from '../constants';

const initialState = {
  calculation: [],
  result: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result,
      };
    case CLEAR:
      return {
        calculation: [],
        result: 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
