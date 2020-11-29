import React, { Component } from "react";
import Sidenavbar from "./Sidebar";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";
import { Redirect } from "react-router-dom";
import axios from "axios";

class NewEmployee extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      fullname: "",
      level: "",
      status: "",
      list: [],
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    this.getAllEmployee();
  }

  handleSubmit(event) {
    event.preventDefault();

    var payload = {
      name: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      level: this.state.level,
    };

    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://localhost:8000/api/addEmployee", payload)
        .then((res) => {
          this.getAllEmployee();
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    });
  }
  getAllEmployee() {
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      axios
        .get("http://localhost:8000/api/getAllEmployees")
        .then((res) => {
          this.setState({
            list: res.data,
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    });
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
          <div className="main">
            <div className="main-content">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-inline">
                    <label for="fullname">FullName </label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Full name"
                      name="fullname"
                      onChange={this.handlechangeall}
                    />
                    <label for="Email">Email </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.handlechangeall}
                    />
                  </div>
                  <div class="form-inline">
                    <label for="password">Password</label>
                    <input
                      type="text"
                      id="password"
                      placeholder="Enter password"
                      name="password"
                      onChange={this.handlechangeall}
                    />
                    <label for="level">Level </label>
                    <input
                      type="text"
                      id="level"
                      placeholder="Enter level"
                      name="level"
                      onChange={this.handlechangeall}
                    />
                    <button class="button button5">+</button>
                  </div>
                </form>
              </div>
              <br />
              <br />
              <div>
                <table border="1" className="center">
                  <thead>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Level</th>
                  </thead>
                  <tbody>
                    {this.state.list.map(function (item, i) {
                      return (
                        <React.Fragment>
                          <tr>
                            <td key={i}>{item.name}</td>
                            <td key={i}>{item.email}</td>
                            <td key={i}>{item.level}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEmployee;
