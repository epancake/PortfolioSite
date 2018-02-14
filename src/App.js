import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3"

var i = 0;
var data = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation',
    'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit',
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident,',
    'sunt in culpa qui officia deserunt mollit anim id est laborum.'];

class App extends Component {

  constructor(props) {
    super(props);

  this.transition = this.transition.bind(this)
  }

  componentDidMount(){
    d3.select('svg')
    .transition();
  }

  transition() {
    d3.select('text').transition()
        .duration(5000)
        .ease("linear")
        .tween("text", function () {
            var newText = data[i];
            var textLength = newText.length;
            return function (t) {
                this.textContent = newText.slice(0,
                                   Math.round( t * textLength) );
            };
        });

    i = (i + 1) % data.length;
  }

  render() {

    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Emily Pancake</h1>
          <h2>Web Developer</h2>
          <svg className="svg" height="30" width="500">
              <text x="250" y="15" fill="black" text-anchor="middle" font-size="16px">Intro text - click mouse on this text</text>
          </svg>
          <p className="typewriter">...yes that's my last name.</p>
        </header>
      </div>
    );
  }
}

export default App;
