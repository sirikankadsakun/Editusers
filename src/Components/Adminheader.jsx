import React, { Component } from 'react';
import './Adminheader.css';

class Adminheader extends Component {
    state = { }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-pink shadow-lg">
            <a class="navbar-brand" href="#">
              <img src="assets/Ying.jpg.jpg"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/admin/users">Users</a>
                </li>
                </ul>
            </div>

          </nav>
          
        );
    }
}

export default Adminheader ; 
