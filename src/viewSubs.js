import React, { Component } from "react";

export default class ViewSubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    let users = localStorage.getItem("users");
    if (users !== null) {
      this.setState({
        users: JSON.parse(users)
      });
    }
  }

  del(index) {
    let arr = this.state.users;
    arr.splice(index,1);
    localStorage.setItem("users",JSON.stringify(arr));
    this.setState({
        users: arr
    })
  }

  displayUsers() {
    return this.state.users.map((item, index) => (
      <table key={index} className="table table-bordered">
        <tbody>
          <tr>
            <td className="col-md-4">{item.name}</td>
            <td className="col-md-4">{item.email}</td>
            <td className="col-md-4">{item.phone}</td>
            <td className="col-md-4">
              <button onClick={() => this.del(index)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    ));
  }

  render() {
    return (
        <div>
            {this.displayUsers()}
        </div>
    )
  }
}
