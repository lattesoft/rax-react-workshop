import React, { Component } from 'react'
import axios from 'axios';

export default class ProfileComponent extends Component {
    constructor(){
        super();
        this.state = {
            profile: {
                "id": null,
                "email": null,
                "first_name": null,
                "last_name": null,
                "avatar": null,
            }
        }
    }

    componentDidMount(){
        axios.get("https://reqres.in/api/users/2")
            .then((res)=>{
                this.setState({
                    profile: res.data.data
                });
            });
    }
    
    render() {
        let { 
            first_name,
            last_name, 
            email,
            avatar
        } = this.state.profile
        return (
            <div>
                <img width="100" src={avatar}/>
                <p>Name: {first_name} {last_name}</p>
                <p>Email: {email} </p>
            </div>
        )
    }
}
