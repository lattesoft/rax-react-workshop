import React, { Component } from 'react'
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

export default class NavComponent extends Component {
    render() {
        return (
            <div className="header-nav">
                {/* Page name */}
                <div className="nav-title">{this.props.pageName}</div>
                
                {/* Button */}
                <div  className="nav-btn">
                    <Link to="/login">
                        <ButtonComponent title="Login"/> 
                    </Link>
                    <Link to="/counter">
                        <ButtonComponent title="Counter"/> 
                    </Link>
                    <Link to="/profile">
                        <ButtonComponent title="Profile"/> 
                    </Link>
                </div>          
            </div>
        )
    }
}
