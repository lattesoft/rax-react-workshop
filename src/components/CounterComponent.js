import React, { Component } from 'react'
import { connect } from 'react-redux';

class CounterComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
            {this.props.counter.customText}
            <div>
                <input onChange={(e)=>{
                    this.setState({
                        text: e.target.value
                    });
                }} type="text" name="username"></input>
            </div>
            
                Number is: {this.props.counter.number}
                {" "}
                <button onClick={(e)=>{
                    this.props.setNumber("This is a counter number 1 =====> ");
                }} className="btn btn-info btn-sm">+</button>
                <button onClick={(e)=>{
                    this.props.setNumber("This is a counter number 2 =====> ");
                }} className="btn btn-info btn-sm">+</button>
            </div>
        )
    }
}

const mapStateToProps = ({counter,profile})=>{
    return {
        counter,profile
    }
}

const mapDispatchToProps = {
    setNumber: (text)=>{
        return {
            type: "SET_NUMBER",
            payload: text
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);
