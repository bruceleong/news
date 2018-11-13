import React, { Component } from 'react';
import './App.css';
import DenseAppBar from './DenseAppBar';


class App extends Component {
  constructor(){
    super();
    this.state = {foo: 'stuff'}
  }
  componentDidMount = () => {

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>
          Test Website
        </h1>
      </div>
    );
  }
}

export default App;
