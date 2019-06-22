import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateResult } from '../actions';

const CalcButton = ({ buttonNumber, updateResult }) => {
  return (
    <button
      type="button"
      onClick={() => updateResult(Number(buttonNumber))}
    >
      {buttonNumber}
    </button>
  );
};

CalcButton.propTypes = {
  buttonNumber: PropTypes.string.isRequired,
  updateResult: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateResult: buttonNumber => dispatch(updateResult(buttonNumber)),
});

export default connect(null, mapDispatchToProps)(CalcButton);
