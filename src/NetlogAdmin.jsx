import React, {Component} from 'react';
import Adminheader from './Components/Adminheader';
import Welcomeuser from './Components/Welcomeuser';
import Manageusers from './Components/Manageusers';
import Editusers from './Components/Editusers';
import { Switch, Route } from 'react-router-dom';

class NetlogAdmin extends Component  {
    state = { }
     
    constructor(props) {
       super(props);
       let loginuser = JSON.parse(sessionStorage.getItem('loginuser')) || {users_status:''};
       if(loginuser.users_status !== 'admin'){
           window.location.replace('/');

       }
}

    render () { 
        return(
            <div>
            <Adminheader />
            <div className="container">
                <Switch>
                    <Route exact path="/admin" component={Welcomeuser} />
                    <Route path="/admin/users" component={Manageusers} />
                    <Route path="/admin/editusers/:users_name" component={Editusers} />
                   
                </Switch>
                </div>
            </div>
        );
    }
}

export default NetlogAdmin;