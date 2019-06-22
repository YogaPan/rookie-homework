import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './assets/App.css';
import CalcButton from './components/CalcButton';
import { updateResult, clearResult } from './actions';

const App = ({ result, clearResult }) => {
  return (
    <div className="app">
      <p>{result}</p>
      <button type="button" onClick={() => clearResult()}>AC</button>

      <div className="button-row">
        <CalcButton buttonNumber="7" />
        <CalcButton buttonNumber="8" />
        <CalcButton buttonNumber="9" />
      </div>
      <div className="button-row">
        <CalcButton buttonNumber="4" />
        <CalcButton buttonNumber="5" />
        <CalcButton buttonNumber="6" />
      </div>
      <div className="button-row">
        <CalcButton buttonNumber="1" />
        <CalcButton buttonNumber="2" />
        <CalcButton buttonNumber="3" />
      </div>
    </div>
  );
};

App.propTypes = {
  result: PropTypes.number.isRequired,
  clearResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  result: state.result,
});

const mapDispatchToProps = dispatch => ({
  updateResult: result => dispatch(updateResult(result)),
  clearResult: () => dispatch(clearResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
