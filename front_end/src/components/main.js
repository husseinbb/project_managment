import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Main extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {


  }

  render() {


    return (
      <body className="contain">
        <div className="login-register-wrapper">
          <div className="nav-buttons">


          </div>
          <div className="form-group">
            <form>


              <h1 contenteditable data-heading="Frozen">
                <a className="alog" href='/login'>Login</a><br /><br />
              </h1>
              <h1 contenteditable data-heading="Frozen">
                <a className="areg" href="/register">Register</a><br /><br />
              </h1>




            </form>


          </div>


        </div>
      </body>

    );
  }


}



export default Main;
