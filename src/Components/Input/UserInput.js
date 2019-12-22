import React from 'react';
import { Row, Col, Container, Button, InputGroup, FormControl } from 'react-bootstrap';
import "../style.css";

const UserInput = (props) => {
    return (
        <Container className="user_input_container ">
            {/* section title */}
            <Row>
                <h1 className="user_input_header mx-auto">Bill</h1>
            </Row>

            {/* User Input */}
            <Row className='mt-5 mx-auto text-center'>
                <Col className="mb-3" lg={6}>
                    <input name='bill_total' value={props.bill_total} onChange={e => props.updateProps(e)}/>
                </Col>

                <Col className="mb-3">
                    <Button variant="success" disabled={props.bill_total <= 0} onClick={() => props.onSubmit()}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default UserInput;