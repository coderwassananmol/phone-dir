import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddSubscriber from './addSubscriber';
import App from "./App";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div class="topnav">
        <Link to="/">
            View Subscribers
        </Link>
        <Link to="/add">
          Add Subscribers
        </Link>
        <Route path="/" component={App}/>
        <Route path="/add" component={AddSubscriber} />
        </div>
      </Router>
    );
  }
}
