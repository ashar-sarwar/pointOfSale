import React, { Component } from 'react';

import { Row, Col, Container, Button } from "reactstrap"
import { Link } from "react-router-dom";
import ModalClass from './modal';
import Clock from './timer';

class NavbarMenu extends Component {

    render() {
        return (
            <Row className="bg-black ">
                <Col lg="4" className="mt-2 "  >
                    <Link to="#" className="mr-3">
                        <Button href="#" color="secondary text-black">
                            <i className="fa fa-home"></i> Dashboard
                        </Button >
                    </Link>

                    <Button color="secondary text-black" className="mr-3">
                        <i className="fa fa-history" ></i> Hold
                    </Button>
                    <ModalClass buttonLabel="Search Item" class="fa fa-search" buttonclass="" color="secondary text-black" modalClass="modal-dialog modal-drawer-right" />

                    <ModalClass buttonLabel="Refund" class="fa fa-undo" buttonclass="" color="warning text-black" modalClass="" />


                </Col>
                <Col lg="4" className="">
                    <Clock />
                </Col>

                <Col lg="4" className="d-flex justify-content-lg-end mt-2" >

                    <ModalClass buttonLabel="Close Register" class="fa fa-cash-register" buttonclass="mr-3" color="secondary text-black" />
                    <Button color="secondary text-black" className="mr-3">
                        <i className="fa fa-inbox" ></i> Open Drawer
                    </Button>

                </Col>

            </Row>
        );
    }
}

export default NavbarMenu;