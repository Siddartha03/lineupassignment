import React, { Component } from 'react';
import './Home.css';
import Home from './Home';
import Topnav from './Topnav';

class App extends Component {
  render() {
  return <div>
              <Home/>
              <Topnav/>
          </div> 
  }
}

export default App;