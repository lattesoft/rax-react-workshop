import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from '../redux/actions/profileActions';
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {
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

    __onSubmit = async ()=>{
        // console.log(this.state);
        const res = await axios.get("https://reqres.in/api/users/1")
        this.props.setUser(res.data.data);
        this.props.history.push("/profile");
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


export default connect(null,{setUser})(
    withRouter(LoginComponent)
);