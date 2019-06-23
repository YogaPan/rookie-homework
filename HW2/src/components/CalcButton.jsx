import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calculate } from '../actions';

const CalcButton = ({
  buttonName,
  isOperator,
  isFunctional,
  calculate,
}) => {
  const className = [
    'calc-button',
    isOperator ? 'calc-button--operator' : '',
    isFunctional ? 'calc-button--functional' : '',
  ].join(' ').trim();

  return (
    <button
      className={className}
      type="button"
      onClick={() => calculate(buttonName)}
    >
      {buttonName}
    </button>
  );
};

CalcButton.defaultProps = {
  isOperator: false,
  isFunctional: false,
};

CalcButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isOperator: PropTypes.bool,
  isFunctional: PropTypes.bool,
  calculate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  calculate: buttonName => dispatch(calculate(buttonName)),
});

export default connect(null, mapDispatchToProps)(CalcButton);
