import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ButtonComponent extends Component {
    render() {
        return (
            <Button style={{margin: 5}} color="danger">
                {this.props.title}
            </Button>
        )
    }
}
