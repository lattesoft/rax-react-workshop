import React, { Component } from 'react'

export default class CounterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "Hello World",
            number: 1
        }
    }
    
    render() {
        return (
            <div>
            {this.state.text}
            <div>
                <input value={this.state.text} onChange={(e)=>{
                    this.setState({
                        text: e.target.value
                    });
                }} type="text" name="username"></input>
            </div>
            
                Number is: {this.state.number}
                {" "}
                <button onClick={(e)=>{
                    this.setState({
                        number: ++this.state.number
                    });
                }} className="btn btn-info btn-sm">+</button>
            </div>
        )
    }
}
