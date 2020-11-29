import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
  constructor() {
    super();
    this.state = {
                    email: '',
                    password:'',
                    name:'',
                    emialErr: '',
                    passwordErr: '',
                    status: '',
                    loader: 'none',
                    redirect:false,
                };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlechangeall = (event) =>{
    this.setState ( { [event.target.name] :event.target.value  } )
}

handleSubmit(event) {
    event.preventDefault();
    var error = [];
        if(this.state.email === ''){
            this.setState({
                emialErr: 'Email can not be empty.',
            });
            error.push("Email error");
        }else{
            this.setState({
                emialErr: '',
            });
        }

        if(this.state.password === ''){
            this.setState({
                passwordErr: 'Password can not be empty.',
            });
            error.push("Password error");
        }else{
            this.setState({
                passwordErr: '',
            });
        }

        if(error.length > 0){
            return;
        }else{
            this.setState({
                status: '',
                
                redirect:true
            });
          }
          var payload={
            'email':this.state.email,
            'password':this.state.password
          }

          console.log(this.state.email,"",this.state.password);


       //axios.defaults.withCredentials = true;
       axios.get('/sanctum/csrf-cookie').then(response =>{
            axios.post('/login',payload).then(res =>{
                console.log(res.data);
                
                this.state({
                  redirect:true,
                  name:res.data.name
                })
            })
       });
           
            
}
 
  render(){
    if(this.state.redirect === true  ){
      return( 
     localStorage.setItem('name',this.state.name),
      <Redirect to={'/dashboard'} /> 
      )
  }

  return (
    <body className
    ="contain">
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <button  id="loginBtn" >Login</button>
        
      </div>
      <div className="form-group">
        <form id='loginform' onSubmit={this.handleSubmit} >
          
            
            <label >UserName</label>
            <input type="text" id="email" name="email" onChange={this.handlechangeall}/>
            <p>{ this.state.emialErr }</p>
            
            <br/>
            
            <label>Password</label>
            <input type="password" id="password" name="password" onChange={this.handlechangeall}/>
            <p>{ this.state.passwordErr }</p>
            
            <input type="submit" value="submit" className='submit'  />

          
        </form>

        
      </div>
    
      <a href="/main" className="back">Back</a>
    </div>
    </body>
  );
  }

  
}



export default Login;
