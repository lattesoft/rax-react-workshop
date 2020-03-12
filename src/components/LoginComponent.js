import React, { Component } from 'react'

export default class LoginComponent extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }

        // console.log();
    }

    __inputHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    __onSubmit = ()=>{
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <input onChange={this.__inputHandler} 
                    type="text" name="username"></input>
                <input onChange={this.__inputHandler} 
                    type="password" name="password"></input>
                <button onClick={this.__onSubmit}>Login</button>
            </div>
        )
    }
}
