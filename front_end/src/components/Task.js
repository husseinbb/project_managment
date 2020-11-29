import React, { Component } from 'react';
import Sidenavbar from './Sidebar';

import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Form from './Form';
import List from './List';

class Task extends Component {
    constructor() {
        super();

        this.state={
            data : [],
            list : [] 
        };
    }
    handleSubmit=(newVal)=>{
        this.setState({data: [...this.state.data, newVal]})
      };
      
      componentDidUpdate(){
        localStorage.setItem('dataStore',JSON.stringify(this.state.data));
      }
      
      
      componentDidMount(){
        const dataStore = JSON.parse(localStorage.getItem('dataStore'));
        if(dataStore !== null){
          this.setState({data: dataStore});
        }
        this.getAllProject();
      }
      handleRemove = index =>{
        const {data}=this.state;
        this.setState({
          data: data.filter((item,i)=>{
            return i !== index
          })
        })
      };
      
      handleOnEdit = (editVal, index) =>{
        const {data} = this.state;
        data.forEach((item, i) =>{
          if(i === index){
            item.todo=editVal;
          }
        });
        this.setState({data: data});
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
        // if(!localStorage.getItem('name')){
        //     return( <Redirect to={'/login'} /> )
        // }


        const { data } = this.state;


        return (
            <div>
                <div id="wrapper">


                    <Navbar />
                    <Sidenavbar />
                    <div className="main">

                    <select className="selectop" name="category" onChange={this.handlechangeall}>
                                                    <option value="">Select Project</option>
                                                    {
                                                        this.state.list.map(function(item, i){
                                                            return <option key={i} value={item.name}>{item.name}</option>
                                                        })
                                                    }
                                                    </select>
                        

                            <div className="applist">
                                <Form onSubmit={this.handleSubmit} />
                                <br/>
                                <h3>Task to be done </h3>
                                {data.length === 0
                                    ? <h4>Nothing To Do</h4>
                                    : <List todo={data}
                                        onDelete={this.handleRemove}
                                        onEdit={this.handleOnEdit}
                                        count={data.length}
                                    />}

                            </div>

                       



                    </div>
                </div>
            </div>
        )
    }
}




export default Task;
