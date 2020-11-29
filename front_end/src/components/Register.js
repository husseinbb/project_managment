import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            fullname: '',
            level: '',
            emialErr: '',
            passwordErr: '',
            status: '',
            redirect: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        var error = [];
        if (this.state.fullname == '') {
            this.setState({
                emialErr: 'Email can not be empty.',
            });
            
        } else {
            this.setState({
                emialErr: '',
            });
        }
        if (this.state.email == '') {
            this.setState({
                emialErr: 'Email can not be empty.',
            });
            error.push("Email error");
        } else {
            this.setState({
                emialErr: '',
            });
        }

        if (this.state.password == '') {
            this.setState({
                passwordErr: 'Password can not be empty.',
            });
            error.push("Password error");
        } else {
            this.setState({
                passwordErr: '',
            });
        }

        if (error.length > 0) {
            return;
        } else {
            this.setState({
                status: '',
                redirect: true
            });
        }
        var payload={
            'name':this.state.fullname,
            'email':this.state.email,
            'password':this.state.password,
            'password_confirmation':this.state.password
          }

          //console.log(payload)

       axios.defaults.withCredentials = true;
       axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response =>{
            axios.post('http://localhost:8000/register',payload).then(res =>{
                console.log(res.data);
                this.state={
                    redirect:true
                }
            })
       });


    }

    render() {
            if(this.state.redirect == true  ){
              return( localStorage.setItem('name',this.state.fullname),
              <Redirect to={'/dashboard'} />  )
          }

        return (
            <body className
                ="contain">
                <div className="login-register-wrapper">
                    <div className="nav-buttons">
                        <button id="loginBtn" >Create New Account</button>

                    </div>
                    <div className="form-group">
                        <form id='loginform' onSubmit={this.handleSubmit} >

                            <label >Full Name</label>
                            <input type="text" id="fullname" name="fullname" onChange={this.handlechangeall} />
                            <p>{this.state.emialErr}</p>

                            <label >UserName</label>
                            <input type="text" id="email" name="email" onChange={this.handlechangeall} />
                            <p>{this.state.emialErr}</p>

                            <br />

                            <label>Password</label>
                            <input type="password" id="password" name="password" onChange={this.handlechangeall} />
                            <p>{this.state.passwordErr}</p>

                            <input type="submit" value="submit" className='submit' />


                        </form>


                    </div>

                    <a href="/main" className="back">Back</a>
                </div>
            </body>
        );
    }


}



export default Register;
