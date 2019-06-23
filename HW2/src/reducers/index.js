import { CALCULATE } from '../constants';
import calculate from '../utils';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE:
      return calculate(state, action.payload.buttonName);
    default:
      return state;
  }
};

export default rootReducer;
