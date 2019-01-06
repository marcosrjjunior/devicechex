import React, { Component } from 'react';
import './App.css';
import Checker from './components/Checker';
import store from './components/CheckerStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Checker store={store} />
      </div>
    );
  }
}

export default App;
