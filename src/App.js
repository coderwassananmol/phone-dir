import React, { Component } from 'react';
import './App.css';
import ViewSubs from './viewSubs';
import AddSubscriber from './addSubscriber';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ViewSubs />
      </div>
    );
  }
}

export default App;
