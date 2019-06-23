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
        <CalcButton buttonValue="+/-" isFunctional={true} />
        <CalcButton buttonValue="%" isFunctional={true}/>
        <CalcButton buttonValue="/" isOperator={true} />
      </div>

      <div className="button-row">
        <CalcButton buttonValue={7} />
        <CalcButton buttonValue={8} />
        <CalcButton buttonValue={9} />
        <CalcButton buttonValue="*" isOperator={true} />
      </div>
      <div className="button-row">
        <CalcButton buttonValue={4} />
        <CalcButton buttonValue={5} />
        <CalcButton buttonValue={6} />
        <CalcButton buttonValue="-" isOperator={true}/>
      </div>
      <div className="button-row">
        <CalcButton buttonValue={1} />
        <CalcButton buttonValue={2} />
        <CalcButton buttonValue={3} />
        <CalcButton buttonValue="+" isOperator={true}/>
      </div>
      <div className="button-row">
        <CalcButton buttonValue={0} />
        <CalcButton buttonValue="." />
        <CalcButton buttonValue="." />
        <CalcButton buttonValue="=" isOperator={true}/>
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
