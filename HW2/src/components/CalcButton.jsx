import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateResult } from '../actions';

const CalcButton = ({ buttonNumber, isOperator, isFunctional, updateResult }) => {
  let className = 'calc-button';
  if (isOperator) className += ' calc-button--operator';
  if (isFunctional) className += ' calc-button--functional';

  return (
    <button
      className={className}
      type="button"
      onClick={() => updateResult(Number(buttonNumber))}
    >
      {buttonNumber}
    </button>
  );
};

CalcButton.defaultProps = {
  isOperator: false,
  isFunctional: false,
};

CalcButton.propTypes = {
  buttonNumber: PropTypes.string.isRequired,
  isOperator: PropTypes.bool,
  isFunctional: PropTypes.bool,
  updateResult: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateResult: buttonNumber => dispatch(updateResult(buttonNumber)),
});

export default connect(null, mapDispatchToProps)(CalcButton);
