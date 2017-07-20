import React from 'react';
import NumberInput from './NumberInput'
import LedView from './Led'
import logo from '../logo.svg';
import '../App.css';

const App = () => (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LED-App Tekton Labs</h2>
        </div>
        <p className="App-intro">
          Presentacion de App que muestra un número en formato LED.<code>src/App.js</code>
        </p>
        <NumberInput/>
        <LedView/>
      </div>
)


export default App;
