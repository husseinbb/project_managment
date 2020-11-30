import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {}

  render() {
    return (
      <div className="contain" id="main">
        <div className="login-register-wrapper">
          <div className="nav-buttons">
            <h1 className="form-title text-frozen">Project Manager</h1>
          </div>
          <div className="form-group">
            <form>
              <h4>
                <Link className="form-text" to="/companyMain">
                  Company
                </Link>
                <br />
                <br />
              </h4>
              <h4>
                <Link className="form-text" to="/login">
                  Employee
                </Link>
                <br />
                <br />
              </h4>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
