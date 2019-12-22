import React from 'react';
import {
    Row,
    Col,
    Container,
    Table,
    Button
} from 'react-bootstrap';
import "../style.css"


const Tips = props => {
    return (
        <Container className="user_input_container ">
            {/* Tips */}
            <Row>
                <h1 className="user_input_header mx-auto">Tips</h1>
            </Row>


            {/* Bill */}
            {props.bill > 0 ?
                <div>
                    <Row lg={12} md={12} sm={12} xs={12}>
                        <Col>
                            Bill: {props.bill}
                        </Col>
                    </Row>
                    <br/>
                    <Row lg={12} md={12} sm={12} xs={12}>
                        <Col>
                            <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th>Percentage</th>
                                        <th>Tip</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10%</td>
                                        <td>{(props.bill * .1)}</td>
                                        <td>{(props.bill * .1) + parseInt(props.bill)}</td>
                                    </tr>
                                    <tr>
                                        <td>15%</td>
                                        <td>{(props.bill * .15)}</td>
                                        <td>{(props.bill * .15) + parseInt(props.bill)}</td>
                                    </tr>
                                    <tr>
                                        <td>20%</td>
                                        <td>{(props.bill * .2)}</td>
                                        <td>{(props.bill * .2) + parseInt(props.bill)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row lg={12} md={12} sm={12} xs={12}>
                        <Button size="lg" variant="dark" className="mx-auto my-3">
                            Custom Tip
                        </Button>

                    </Row>
                </div>
                : null}


        </Container>
    )
}

export default Tips;