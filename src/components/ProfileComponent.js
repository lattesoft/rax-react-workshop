import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ProfileComponent extends Component {
    render() {
        if(!this.props.profile.isLogin){
            this.props.history.push("/login")
        }
        let {first_name,last_name, email, avatar} = this.props.profile.data;
        return (
            <div>
                <img width="100" src={avatar}/>
                <p>Name: {first_name} {last_name}</p>
                <p>Email:  {email}</p>
            </div>
        )
    }
}

export default connect((store)=>{
    return {
        profile: store.profile
    }
})(withRouter(ProfileComponent));
