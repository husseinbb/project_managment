import React, { Component } from "react";
import Sidenavbar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";

class AssignProject extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      redirect: false,
    };

    
  }
  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  getAllProject() {
    axios
      .get("/api/getAllProjects")
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
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <Navbar />
          <Sidenavbar />
          <div className="main">
            <div className="main-content">
              <div>
                <form >
                  <div class="form-inline">
                  <label>Select Project to be Assigned</label>
                  <select  name="Project" onChange={this.handlechangeall}>
                                
                                <option value="">Select Project</option>
                                {
                                    this.state.list.map(function (item, i) {
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    })
                                }
                            </select>
                            </div>
                            <div class="form-inline">
                            <label>Select Employee</label>
                            <select  name="Project" onChange={this.handlechangeall}>
                               
                                <option value="">Select Employee</option>
                                {
                                    this.state.list.map(function (item, i) {
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    })
                                }
                            </select>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="button button5">+</button>

                  </div>
                 
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AssignProject;
