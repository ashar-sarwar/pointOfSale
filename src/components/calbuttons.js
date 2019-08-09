import React from 'react';
import { Row, Col, Button } from "reactstrap";

const CalButton = (props) => {

    return (

        <React.Fragment>

            <Row className="keyboard-wrapper ">

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-7 text-black" onClick={() => props.handleClick('7')}>7</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-8 text-black" onClick={() => props.handleClick('8')}>8</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-9 text-black" onClick={() => props.handleClick('9')}>9</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-4 text-black" onClick={() => props.handleClick('4')}>4</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-5 text-black" onClick={() => props.handleClick('5')}>5</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-6 text-black" onClick={() => props.handleClick('6')}>6</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-1 text-black" onClick={() => props.handleClick('1')}>1</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-2 text-black" onClick={() => props.handleClick('2')}>2</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-3 text-black" onClick={() => props.handleClick('3')}>3</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-dot text-black" onClick={() => props.handleClick('.')}>.</Button></Col>

                <Col lg="4" sm="4" xs="4">
                    <Button className="btn-secondary btn-block input-dot text-black" onClick={() => props.handleClick('0')}>0</Button></Col>

                <Col lg="4" sm="12" xs="12">
                    <Button className="btn-secondary btn-block input-back text-black" onClick={props.handleReset}>←</Button></Col>

            </Row>

        </React.Fragment>);
}

export default CalButton;
