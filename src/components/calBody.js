import React, { Component } from 'react';
import CalButton from './calbuttons';
import { Input } from 'reactstrap'

class Calbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    handleClick = (value) => {
        document.getElementById("cal-input").focus()
        var current_value = document.getElementById("cal-input");
        if (current_value) {
            console.log(value)
            current_value.value = current_value.value + value
        } else {
            console.log(value)

            current_value.value = value
        }

        this.setState({ text: current_value.value });
    }

    handleReset = () => {
        var current_value = document.getElementById("cal-input");
        current_value.value = ''
        this.setState({ text: '' })
    }

    render() {

        const { name } = this.props
        console.log("hello")

        return (
            <React.Fragment>
                <Input placeholder={name} id="cal-input" type="number" step="any" autoFocus />
                <CalButton handleClick={this.handleClick} handleReset={this.handleReset} />
            </React.Fragment>);
    }
}
export default Calbody;