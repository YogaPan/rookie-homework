import { CALCULATE } from '../constants';

export const calculate = buttonName => ({
  type: CALCULATE,
  payload: {
    buttonName,
  },
});
