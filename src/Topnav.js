import React, { Component } from 'react';
import './Home.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Topnav extends Component {
    render() {
    return (
      <div>
         <div class="navbar">
            <i class="fa fa-user-circle-o" aria-hidden="true">User Name</i>
            <i class="fa fa-users" aria-hidden="true"></i>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
      </div>
    );
    }
  }

  export default Topnav;