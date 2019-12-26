import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import Search from '../../components/Search/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;