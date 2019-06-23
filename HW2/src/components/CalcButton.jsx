import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateResult } from '../actions';

const CalcButton = ({
  buttonValue,
  calculation,
  result,
  isOperator,
  isFunctional,
  updateResult,
}) => {
  let className = 'calc-button';
  if (isOperator) className += ' calc-button--operator';
  if (isFunctional) className += ' calc-button--functional';

  return (
    <button
      className={className}
      type="button"
      onClick={() => updateResult(buttonValue, calculation, result)}
    >
      {buttonValue}
    </button>
  );
};

CalcButton.defaultProps = {
  isOperator: false,
  isFunctional: false,
};

CalcButton.propTypes = {
  buttonValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  result: PropTypes.number.isRequired,
  calculation: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOperator: PropTypes.bool,
  isFunctional: PropTypes.bool,
  updateResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  result: state.result,
  calculation: state.calculation,
});

const mapDispatchToProps = dispatch => ({
  updateResult: (inputValue, currentState, currentResult) => (
    dispatch(updateResult(inputValue, currentState, currentResult))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalcButton);
