import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import UserInput from './Components/Input/UserInput';
import Tips from './Components/Tips/tips'
import Header from './Components/Header';


const log = console.log;
class App extends Component {
  state = {
    bill_total: 0,
    user_validation_message: false,
    showCustomOptions: false,
    showTips: false
  }

  submitBill = (data) => {
    log(`data: ${data}`);

    this.setState({
      showTips: true
    })
  }


  updateProps = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    })

    

  }


  onCustomTip = (e) => {
    // const {name, value} = event.target;
    const log = console.log;

    log(`button clicked! ${this.state.bill_total}`)

    this.setState({
      showCustomOptions: true
    });
  }

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
                user_validation_message={this.state.user_validation_message}
                submitBill={(data) => this.submitBill(data)}
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Tips Component */}
              <Tips 
                bill={this.state.bill_total}
                onCustomTip={(e) => this.onCustomTip(e)}
                showCustomOptions={this.state.showCustomOptions}
                showTips={this.state.showTips}
                 />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
