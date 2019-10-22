import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import UserInput from './Components/UserInput';
import Header from './Components/Header';

function App() {
  return (
    <div className='project_container'>
      <Container>
        <Row>
          <Col>
            {/* Header */}
            <Header />
          </Col>
        </Row>


        <UserInput />
      </Container>
    </div>
  );
}

export default App;
