import React, { Component } from 'react';
import './Welcomeuser.css'

class Welcomeuser extends Component {
    state = {
    users_name:'',
    users_password:'',
    users_phone:'',
    users_email:''
     }
     componentDidMount(){
        let userlogin = JSON.parse
         (sessionStorage.getItem('loginuser')) ||
          this.setState;
          this.setState(userlogin);
 }

    render () {
        return (
            <div className="mt-5 col-md-7 mx-auto">
            <div className="card shadow">
            <div className="card-header bg-info text-white">
            <h2>welcome</h2>
            </div>
              
            <div className="card-body">
            <div type="none" id="userinfo" className="p-3">
                   <li id="userinfohead">{
                      this.state.users_fullname }</li>
                       <li><b>Username: </b>{
                      this.state.users_name }</li>
                      <li><b>Username: </b>{
                      this.state.users_phone }</li>
                      <li><b>Phone: </b>{
                      this.state.users_email }</li>
            </div>    
              <hr />
                                 
                    
             
              </div>     
                </div>
            </div>
        );
    }
}

export default Welcomeuser;