import React from 'react';
import {
    Row,
    Col,
    Container,
    Alert,
    Button
} from 'react-bootstrap';
import "../style.css";

const UserInput = (props) => {
    return (
        <Container className="component_container">
            {/* section title */}
            <Row>
                <h1 className="user_input_header mx-auto">Bill</h1>
            </Row>

            {/* User Input */}
            <Row className='mt-5 mx-auto text-center'>
                <Col className="mb-3" lg={6}>
                    <label>Enter bill total:</label>
                    <input name='bill_total' value={props.bill_total} onChange={e => props.updateProps(e)} />
                    {/* <input name='bill_total' value={props.bill_total}/> */}

                </Col>

                <Col lg={6} className='mt-4'>
                    <Button variant='dark' onClick={() => props.submitBill(props.bill_total)}>
                        Submit
                    </Button>
                </Col>

                <Col lg={12}>
                    {props.user_validation_message ?
                        <Alert variant="warning" >
                            Please enter any number greater than 0.
                        </Alert> : null}
                </Col>


                {/* Old submit button w/ onSubmit function*/}
                {/* <Col className="mb-3"> */}
                {/* <Button variant="success" disabled={props.bill_total <= 0} onClick={() => props.onSubmit()}>Submit</Button> */}
                {/* </Col> */}
            </Row>
        </Container>
    );
}

export default UserInput;