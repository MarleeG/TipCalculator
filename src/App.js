import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import UserInput from './Components/Input/UserInput';
import Tips from './Components/Tips/tips'
import Header from './Components/Header';

class App extends Component {
  state = {
    bill_total: 0,
  }

  updateProps = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }


  // Submit button - May remove later
  // onSubmit = () => {
  //   this.setState({
  //     bill_total: 0
  //   })
  // }

  render() {
    return (
      <div className='project_container'>
        <Container>
          <Row>
            <Col>
              {/* Header */}
              <Header />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              {/* User Input */}
              <UserInput
                bill_total={this.state.bill_total}
                updateProps={(e) => this.updateProps(e)}
                />
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Tips Component */}
              <Tips bill={this.state.bill_total}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
