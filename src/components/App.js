import React, { Component } from 'react';
import Home from './Home';
const {ipcRenderer} = require('electron')
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: #0B0D0B;
    color: white;
    font-family: "Lars", arial;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  ul{
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 28px;
    line-height: 45px;
  }

  li:hover {
    background: #171817;
  }

  *:focus {outline:0;}

`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
