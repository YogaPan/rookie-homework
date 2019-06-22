import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './assets/App.css';
import CalcButton from './components/CalcButton';
import { updateResult, clearResult } from './actions';

const App = ({ result, clearResult }) => {
  return (
    <div className="App">
      <p className="result">{result}</p>
      <div className="button-row">
        <button className="calc-button calc-button--functional" type="button" onClick={() => clearResult()}>AC</button>
        <CalcButton buttonNumber="+/-" isFunctional={true} />
        <CalcButton buttonNumber="%" isFunctional={true}/>
        <CalcButton buttonNumber="/" isOperator={true} />
      </div>

      <div className="button-row">
        <CalcButton buttonNumber="7" />
        <CalcButton buttonNumber="8" />
        <CalcButton buttonNumber="9" />
        <CalcButton buttonNumber="*" isOperator={true} />
      </div>
      <div className="button-row">
        <CalcButton buttonNumber="4" />
        <CalcButton buttonNumber="5" />
        <CalcButton buttonNumber="6" />
        <CalcButton buttonNumber="-" isOperator={true}/>
      </div>
      <div className="button-row">
        <CalcButton buttonNumber="1" />
        <CalcButton buttonNumber="2" />
        <CalcButton buttonNumber="3" />
        <CalcButton buttonNumber="+" isOperator={true}/>
      </div>
      <div className="button-row">
        <CalcButton buttonNumber="0" />
        <CalcButton buttonNumber="." />
        <CalcButton buttonNumber="." />
        <CalcButton buttonNumber="=" isOperator={true}/>
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
