import React from 'react';

class Form extends React.Component {
    inputValue={
        todo:''
    }
    state=this.inputValue;
    handleInput=(e)=>{
        const{name,value}=e.target;
        this.setState({
            [name]: value
        })
    };
    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.inputValue);
    }
    render() {
        const {todo}=this.state;
       
        return (
            <>
            <form onSubmit={this.handleOnSubmit} className="todoform">
                <input type="text"  name="todo" id="todo" 
                value={todo} onChange={this.handleInput} required></input>
                <button type="submit" className="but">Create</button>
                
            </form>
            </>
        );
    };
}

export default Form;