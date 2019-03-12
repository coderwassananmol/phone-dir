import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';

export default class AddSubscriber extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         phone: "",
         users: JSON.parse(localStorage.getItem('users'))
         // data: [{name: "prashant", phone: "8527753545", email: "pk021998@gmail.com"}]
      }
   }

   onSubmit(event) {
      event.preventDefault();
      console.log(this.state.name);
      var arr = JSON.parse(localStorage.getItem("users"));
      var obj = {
         name: this.state.name,
         email: this.state.email,
         phone: this.state.phone,
      }

      if(arr == null) {
         var item = [];
         item.push(obj);
         localStorage.setItem("users",JSON.stringify(item));
         console.log("Localstorage is null");
         swal("Good job!", "Subscriber Added", "success");
      } if(arr != null) {
         arr.push(obj);
         console.log("Localstorage is not null");
         console.log(arr);
         localStorage.setItem("users", JSON.stringify(arr));
         swal("Good job!", "Subscriber Added", "success");
      } if(localStorage == null) swal("Boo!", "Subscription Failed", "error");
   }

  render() {
    return (
       
        <div className="container">
        <table className="table">
           <tbody>
              <tr>
                 <td colSpan="1">
                    <form className="well form-horizontal" onSubmit={this.onSubmit.bind(this)}>
                       <fieldset>
                          <div className="form-group">
                             <label className="col-md-4 control-label">Full Name</label>
                             <div className="col-md-8 inputGroupContainer">
                                <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="fullName" onChange={(event) => this.setState({name: event.target.value})} name="fullName" placeholder="Full Name" className="form-control"  type="text" required/></div>
                             </div>
                          </div>
                          <div className="form-group">
                             <label className="col-md-4 control-label">Email</label>
                             <div className="col-md-8 inputGroupContainer">
                                <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span><input id="email" onChange={(event) => this.setState({email: event.target.value})} name="email" placeholder="Email" className="form-control" type="email" required/></div>
                             </div>
                          </div>
                          <div className="form-group">
                             <label className="col-md-4 control-label">Phone Number</label>
                             <div className="col-md-8 inputGroupContainer">
                                <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span><input id="phoneNumber" onChange={(event) => this.setState({phone: event.target.value})} name="phoneNumber" placeholder="Phone Number" className="form-control" type="number" /></div>
                             </div>
                          </div>
                       </fieldset>
                       <button type="submit" className="btn btn-primary">Add Subscriber</button>
                    </form>
                 </td>
              </tr>
           </tbody>
        </table>
     </div>
    );
  }
}