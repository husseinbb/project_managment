import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Logout extends Component{
    constructor() {
        super();
        localStorage.clear();
    }


    render(){
        if(!localStorage.getItem('name')){
            return( <Redirect to={'/login'} /> )
        }

        return (
            <div>
                
            </div>
        )
    }
}
export default Logout;