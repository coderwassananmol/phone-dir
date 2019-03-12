import React, { Component } from 'react'

export default class ViewSubs extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: JSON.parse(localStorage.getItem('users'))
        }
    }

    render(){

        function del(index) {

        }

        return (
            
            this.state.users.map((item, index) => (
          <table className="table table-bordered">
                <tbody> 
                    <tr>
                        <td className="col-md-4">{item.name}</td>
                        <td className="col-md-4">{item.email}</td>
                        <td className="col-md-4">{item.phone}</td>
                        <td className="col-md-4"><button onClick={() => del(index)} className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>                   
       )))
    }
}