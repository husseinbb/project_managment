import React, { Component } from "react";
import Sidenavbar from "./Sidebar";

import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Chat from "./Chat";

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    // if(!localStorage.getItem('name')){
    //     return( <Redirect to={'/login'} /> )
    // }

    return (
      <div>
        <div id="wrapper">
          <Navbar />
          <Sidenavbar />
          {/* <Chat/> */}
          <div className="main">
            <div className="main-content"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
