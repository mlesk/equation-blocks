import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import equations from './equations';
import EquationBlocksByCategory from './components/equation/EquationBlocksByCategory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Gavin's Equation Playground</h2>
        </div>
        <p className="App-intro">
          Lets code some equations...
        </p>
        <EquationBlocksByCategory equations={equations}/>
      </div>
    );
  }
}

export default App;
