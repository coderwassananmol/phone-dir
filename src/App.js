import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddSubscriber from "./addSubscriber";
import ViewSubs from "./viewSubs";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="topnav">
            <Link to="/">View Subscribers</Link>
            <Link to="/add">Add Subscribers</Link>
          </div>
          <Route exact path="/" component={ViewSubs} />
          <Route path="/add" component={AddSubscriber} />
        </div>
      </Router>
    );
  }
}
