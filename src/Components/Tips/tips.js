import React from 'react';
import {
    Row,
    Col,
    Container,
    Table,
    Button,
} from 'react-bootstrap';
import "../style.css"


const Tips = props => {
    return (
        <Container className="component_container">
            {/* Tips */}
            <Row className="my-3">
                <h1 className="user_input_header mx-auto">Tips</h1>
            </Row>


            {/* Bill */}
            {props.bill > 0 && props.showTips?
                <div>
                    <Row lg={12} md={12} sm={12} xs={12} className="text-center">
                        <Col className="bill_total">
                            <strong>
                                Bill: ${props.bill}
                            </strong>
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
                                        <td>${((props.bill * .1)).toFixed(2)}</td>
                                        <td>${((props.bill * .1) + parseInt(props.bill)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>15%</td>
                                        <td>${((props.bill * .15)).toFixed(2)}</td>
                                        <td>${((props.bill * .15) + parseInt(props.bill)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>20%</td>
                                        <td>${((props.bill * .2)).toFixed(2)}</td>
                                        <td>${((props.bill * .2) + parseInt(props.bill)).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row lg={12} md={12} sm={12} xs={12}>
                        <Button 
                            size="lg" 
                            variant="dark" 
                            className="mx-auto my-3"
                            onClick={(e) => props.onCustomTip(e)}>
                            Custom Tip
                        </Button>
                    </Row>


                    {props.showCustomOptions &&
                        <Row lg={12} className="my-4">
                            <Col>
                                <span>Tesing</span>
                                <hr/>
                                <p>Testing purposes</p>
                            </Col>
                        </Row> 
                    }
                    
                </div>
                : null }
        </Container>
    )
}

export default Tips;