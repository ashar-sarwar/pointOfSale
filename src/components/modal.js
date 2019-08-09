import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalClass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        const { toggle, modal, buttonLabel, buttonclass, color } = this.props

        return (

            <React.Fragment>

                <Button color={color} onClick={toggle} className={buttonclass}>
                    <i className={this.props.class}>  </i> {buttonLabel}
                </Button>


                <Modal isOpen={modal} toggle={toggle} className="modal-dialog modal-drawer-right">
                    <ModalHeader toggle={toggle}>
                        {this.props.top}
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle} >Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </React.Fragment>

        );
    }
}
export default ModalClass;
