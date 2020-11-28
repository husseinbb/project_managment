import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Sidebar, Icon, Item } from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';



class Navbar extends Component {
    constructor() {
        super();
        

    }


    render() {
        // if(localStorage.getItem('name')){
        //      name=localStorage.getItem('name') 
        // }

        return (
            <div id="wrapper">



                <div className="mainnav">
                   <label className="log">{localStorage.getItem('name')}</label>


                </div>
            </div>
            
            
        
        )
    }
}


export default Navbar;
