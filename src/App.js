import React, { Component } from 'react';
import TickerPullContainer from "./coinMarketCap/TickerPullContainer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TickerPullContainer />
      </div>
    );
  }
}

export default App;
