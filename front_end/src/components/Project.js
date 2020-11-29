import React, { Component } from 'react';
import Sidenavbar from './Sidebar';
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Project extends Component {
    constructor() {

        super();
        this.state = {
            projectname: '',
            projectdeadline: '',
            status: '',
            redirect: false,
            id: 2,
            list: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    componentDidMount() {
		this.getAllProject();
    }


    handleSubmit(event) {
        event.preventDefault();
        var error = [];
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


            });
        }
        var payload = {
            "name": this.state.projectname,
            "deadline": this.state.projectdeadline
        }

        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post('http://localhost:8000/api/addProject', payload).then(res => {
                this.getAllProject();
                

            })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });

        });

    
    }
    getAllProject(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.get('http://localhost:8000/api/getAllProjects').then(res => {
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


    render() {
        
        return (
            <div>
                <div id="wrapper">


                    <Navbar />
                    <Sidenavbar />
                    <div className="main">

                        <div className="main-content">
                            <div>
                                <form class="form-inline" onSubmit={this.handleSubmit}>

                                    <label for="projectname">Project Name </label>
                                    <input type="text" id="projectname" placeholder="Enter project name" name="projectname" onChange={this.handlechangeall} />
                                    <label for="projectdeadline">Deadline </label>
                                    <input type="date" id="projectdeadline" name="projectdeadline" onChange={this.handlechangeall} />

                                    <button class="button button5">+</button>
                                </form>
                            </div>
                            <br />
                            <br />

                            <div >
                                <table border="1" className="center">

                                    <thead>
                                        <th>Project name</th>
                                        <th>Deadline</th>
                                        
                                    </thead>
                                    <tbody>
                                                        
                                                        {
                                                            this.state.list.map(function(item, i){
                                                                return <React.Fragment>
                                                                            <tr>
                                                                                
                                                                                <td  key={i}>{item.name}</td>
                                                                                <td  key={i}>{item.deadline}</td>
                                                                                
                                                                            </tr>
                                                                        </React.Fragment>  

                                                            })
                                                        }
                                                        
                                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}


export default Project;
