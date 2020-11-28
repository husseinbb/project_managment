import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {Sidebar, Icon, Item} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';



class Sidenavbar extends Component{
    constructor() {
        super();

    }


    render(){
        // if(!localStorage.getItem('name')){
        //     return( <Redirect to={'/login'} /> )
        // }

        return (
            <div>
            <Sidebar bgColor='black' >
                <br/>
                <br/>
              <p className="sidep"> Project Management</p>
              <br/><br/>
              
      <nav className="na">
              <Item bgColor='black'>
              <NavLink to="/dashboard" ><Icon><i className="fas fa-home"/></Icon>
                Home </NavLink>
                
              </Item>
              <br/>
              <Item bgColor='black'>
              <NavLink to="/" ><Icon><i className="fas fa-info"/></Icon>
                Tasks</NavLink>
              </Item>
              <br/>
              <Item bgColor='black'>
              <NavLink to="/project" > <Icon><i className="fas fa-project-diagram"/></Icon>
                My Projects</NavLink>
              </Item>
              <br/>
              <Item bgColor='black'>
              <NavLink to="/" ><Icon><i className="far fa-user"/></Icon>
                Employee</NavLink>
              </Item>
              <br/>
              <Item bgColor='black'>
              <NavLink to="/logout" ><Icon><i className="fas fa-sign-out-alt"/></Icon>
                Logout</NavLink>
              </Item>
              </nav>
             
            </Sidebar>
          </div>
        
        )
    }
}


export default Sidenavbar;
