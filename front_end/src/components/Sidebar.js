import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";

import { Sidebar, Icon, Item } from "react-sidebar-ui";
import axios from "axios";

import "react-sidebar-ui/dist/index.css";

const Sidenavbar = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios.post("/logout").then((res) => {
        console.log("logged out ", res);
        window.localStorage.removeItem("loggedIn");
        history.push("/");
      });
    });
  };
  return (
    <div>
      <Sidebar bgColor="black" isCollapsed={false}>
        <br />
        <br />
        <p className="sidep"> Project Management</p>
        <br />
        <br />

        <nav className="na">
          <Item bgColor="black">
            <Link to="/dashboard">
              <Icon>
                <i className="fas fa-home" />
              </Icon>
              Home{" "}
            </Link>
          </Item>
          <br />
          <Item bgColor="black">
            <Link to="/task">
              <Icon>
                <i className="fas fa-info" />
              </Icon>
              Tasks
            </Link>
          </Item>
          <br />
          <Item bgColor="black">
            <Link to="/project">
              {" "}
              <Icon>
                <i className="fas fa-project-diagram" />
              </Icon>
              My Projects
            </Link>
          </Item>
          <br />
          <Item bgColor="black">
            <Link to="/employee">
              <Icon>
                <i className="far fa-user" />
              </Icon>
              Employee
            </Link>
          </Item>
          <br />
          <Item bgColor="black">
            <button onClick={handleLogout}>
              <Icon>
                <i className="fas fa-sign-out-alt" />
              </Icon>
              Logout
            </button>
          </Item>
          <Item bgColor="black">
            <Link to="/Chat">
              <Icon>
                <i className="fas fa-sign-out-alt" />
              </Icon>
              Chat
            </Link>
          </Item>
        </nav>
      </Sidebar>
    </div>
  );
};

export default Sidenavbar;
