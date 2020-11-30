import React, { Component } from 'react';
import Sidenavbar from './Sidebar';

import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Chat from './Chat';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from '@ramonak/react-progress-bar'

class ShowProject extends Component {
    
    constructor(props) {
        super(props);
        this.state={
           list: [],
            
            

        }

    }
    
    componentDidMount() {
        this.getAllProject();
        this.getAllEmployee();
    }
    getAllEmployee(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.get('http://localhost:8000/api/getEmployees').then(res => {
                this.setState({
                    list: res.data,
                   
                });



            })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });

        });

    }

    

    getAllProject() {
        var proid=2;
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.get('http://localhost:8000/api/getProject/'+proid).then(res => {
                this.setState({
                    name: res.data.name,
                    deadline: res.data.deadline,
                    id: res.data.id
                });



            })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });

        });
    }



    render() {
        // if(!localStorage.getItem('name')){
        //     return( <Redirect to={'/login'} /> )
        // }
        var now=20;

        return (
            <div>
                <div id="wrapper">


                    <Navbar />
                    <Sidenavbar />
                    {/* <Chat/> */}
                    <div className="main">

                        <div className="main-content">
                        
                            <div style={{paddingTop: 2 + 'px'}, {textDecoration: 'underline'}, {color:'red'}}>
                            <label>Name of the Project:{this.state.name}</label>
                           
                            </div>

                        
                            <form class="form-inline">
                        <div >
                                <table border="1" width="200px" style={{marginLeft: 400 + 'px'}}>

                                    <thead>
                                        <th>Employees in this project</th>
                                        

                                    </thead>
                                    <tbody>

                                        {
                                            this.state.list.map(function (item, i) {
                                                return <React.Fragment>
                                                    <tr >

                                                        <td key={i} >{item.name}</td>
                                                        

                                                    </tr>
                                                </React.Fragment>

                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            


                            
                            </form>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                            <div style={{marginLeft: 5 + 'px'}}>
                                <ProgressBar completed={now} width="50%" baseBgColor="red" bgcolor="green"/>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                            
                            
                            

                            
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default ShowProject;

