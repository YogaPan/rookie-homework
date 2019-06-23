import { UPDATE, CLEAR } from '../constants';
import { addValueToCalculation, calculation } from '../utils';

export const updateResult = (inputValue, currentState, currentResult) => {
  // Update the calculation and the result
  // Get the current calc array
  // Convert calc array to string
  // Split string based on operators (/ * - +)
  // Loop over array and make calculation
  const updateCalculationArray = addValueToCalculation(inputValue, currentState);
  const calculationResult = calculation(updateCalculationArray, currentResult);

  return {
    type: UPDATE,
    payload: {
      calculation: updateCalculationArray,
      result: calculationResult,
    },
  };
};

export const clearResult = () => ({ type: CLEAR });
