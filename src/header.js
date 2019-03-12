import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (<div class="topnav">
        <a class="active" href="#home" onClick={() => {console.log('Okay')}}>Add Subscriber</a>
        <a href="#view">View Subscribers</a>
      </div>)
    } 
}