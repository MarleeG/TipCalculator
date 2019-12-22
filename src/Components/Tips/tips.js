import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import "../style.css"


const Tips = props => {
    return(
        <Container className="user_input_container ">
        {/* section title */}
        <Row>
            <h1 className="user_input_header mx-auto">Tips</h1>
        </Row>

    </Container>
    )
} 

export default Tips;