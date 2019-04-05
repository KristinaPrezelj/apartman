import React, { Component } from 'react';
import Navigation from './Header';
import Info from './Homepage';
import Footerinfo from './Footer';

class App extends Component {
  render() {
  
    return (
      <div className="App">
     <Navigation/>
      <Info/>
      <Footerinfo/>
      </div>
    );
  }
}

export default App;
