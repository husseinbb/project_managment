import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Sidenavbar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Form from './components/Form';
import List from './components/List';
import ListItem from './components/ListItem';




function App() {
  return (
    <div className="App">
      <Router>      
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/project" component={Project}/>
        <Route path="/task" component={Task}/>
        <Route path="/form" component={Form}/>
        <Route path="/list" component={List}/>
        <Route path="/listitem" component={ListItem}/>
        <Route path="/sidenavbar" component={Sidenavbar} />
        <Route path="/navbar" component={Navbar}/>
        <Route path="/logout" component={Logout}/>
        
       
      
      </Router>
    </div>
  );
}

export default App;
