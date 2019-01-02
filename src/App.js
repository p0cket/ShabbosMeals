import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getAllItems} from './api/shabbat';
//import {random} from './api/jservice';

class App extends Component {
  state = {
    isLoading: true,
    //question: 'Fake Question Text'
    items: []
  }

  componentDidMount(){
    getAllItems().then(resp => {
      console.log(resp);
    });
  };

  render() {
      const {isLoading, items} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {isLoading && <img src={logo} className="App-logo" alt="logo" />}
          <p>
            {items}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
