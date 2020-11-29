import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "./utils/history";

import Main from "./components/main";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Project from "./components/Project";
import CompanyMain from "./components/CompanyMain";
import Employee from "./components/NewEmployee";
import Task from "./components/Task";
//import Chat from './components/Chat';

import { IsUserRedirect, ProtectedRoute } from "./utils/Routes";
function App() {
  const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/companyMain" component={CompanyMain} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
