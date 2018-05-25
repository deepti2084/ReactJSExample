import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/common/Header';
import Main from './components/common/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
