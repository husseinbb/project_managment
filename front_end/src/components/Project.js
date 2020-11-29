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


    handleSubmit=(event)=> {
        event.preventDefault();
        var error = [];
        if (this.state.email ==='') {
            this.setState({
                emialErr: 'Email can not be empty.',
            });
            error.push("Email error");
        } else {
            this.setState({
                emialErr: '',
            });
        }

        if (this.state.password === '') {
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

        axios.post('/api/addProject', payload).then(res => {
            this.setState({list: [...this.state.list, payload]})
            this.setState({['projectname']:'',projectdeadline:''})  

        })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
            }); 
         
    }

    getAllProject(){
            axios.get('/api/getAllProjects').then(res => {
                this.setState({
                    list: res.data,
                });

            })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
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
                                <form className="form-inline" onSubmit={this.handleSubmit}>

                                    <label htmlFor="projectname">Project Name </label>
                                    <input type="text" id="projectname" placeholder="Enter project name" name="projectname" value={this.state.projectname} onChange={this.handlechangeall} />
                                    <label htmlFor="projectdeadline">Deadline </label>
                                    <input type="date" id="projectdeadline" name="projectdeadline" value={this.state.projectdeadline} onChange={this.handlechangeall} />

                                    <button className="button button5">+</button>
                                </form>
                            </div>
                            <br />
                            <br />

                            <div >
                                <table border="1" className="center">

                                    <thead>
                                        <tr>
                                        <th>Project name</th>
                                        <th>Deadline</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                                        
                                    {
                                        this.state.list.map(function(item, i){
                                            return <React.Fragment>
                                                        <tr key={i}>
                                                            
                                                            <td  key={i}>{item.name}</td>
                                                            <td  key={i+1}>{item.deadline}</td>
                                                            
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
