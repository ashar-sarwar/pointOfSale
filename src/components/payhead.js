import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Calbody from './calBody';


class Payhead extends Component {

    state = {
        flag: false,
        name: ''
    }
    handleClick = (name) => {
        if (name === this.state.name) {

            this.setState({ flag: !this.state.flag, name })

        }
        else {
            this.setState({ flag: true, name })
        }
    }

    render() {
        return (

            <React.Fragment>

                <div className="modal-content">
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item ">
                            <Link data-toggle="tab" to="#" onClick={() => this.handleClick("Cash")} className="nav-link show" >
                                <i className="fa fa-coins"></i>Cash </Link>
                        </li>

                        <li className="nav-item">
                            <Link data-toggle="tab" to="#" onClick={() => this.handleClick("Card")} className="nav-link">
                                <i className="fa fa-credit-card"></i> Card</Link>
                        </li>

                        <li className="nav-item">
                            <Link data-toggle="tab" to="#" onClick={() => this.handleClick("Discount")} className="nav-link">
                                <i className="fa fa-percentage"></i> Discount</Link>
                        </li>
                    </ul>

                    {this.state.flag && <Calbody name={this.state.name} />}
                </div>
            </React.Fragment>
        );
    }
}
export default Payhead;
