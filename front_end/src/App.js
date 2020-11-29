import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './components/main';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Sidenavbar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import Project from './components/Project';
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';




function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>   
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/project" component={Project}/>
        <Route path="/sidenavbar" component={Sidenavbar} />
        <Route path="/navbar" component={Navbar}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/NewEmployee" component={NewEmployee}/>
        
        </Switch>  
        
       
      
      </Router>
    </div>
  );
}

export default App;
