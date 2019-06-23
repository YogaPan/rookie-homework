import React from 'react';
import './assets/App.css';
import CalcButton from './components/CalcButton';
import Display from './components/Display';

const App = () => (
  <div className="App">
    <Display />

    <div className="button-row">
      <CalcButton buttonName="AC" isFunctional />
      <CalcButton buttonName="+/-" isFunctional />
      <CalcButton buttonName="%" isFunctional />
      <CalcButton buttonName="/" isOperator />
    </div>

    <div className="button-row">
      <CalcButton buttonName="7" />
      <CalcButton buttonName="8" />
      <CalcButton buttonName="9" />
      <CalcButton buttonName="*" isOperator />
    </div>
    <div className="button-row">
      <CalcButton buttonName="4" />
      <CalcButton buttonName="5" />
      <CalcButton buttonName="6" />
      <CalcButton buttonName="-" isOperator />
    </div>
    <div className="button-row">
      <CalcButton buttonName="1" />
      <CalcButton buttonName="2" />
      <CalcButton buttonName="3" />
      <CalcButton buttonName="+" isOperator />
    </div>
    <div className="button-row">
      <CalcButton buttonName="0" />
      <CalcButton buttonName="." />
      <CalcButton buttonName="." />
      <CalcButton buttonName="=" isOperator />
    </div>
  </div>
);

export default App;
