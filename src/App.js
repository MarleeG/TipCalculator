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

  submitBill = (input) => {
    log(`input: ${input}`);

    let user_input = input;
    log(`user_input: ${typeof (user_input)}`);
    log(`------------------------------`);

    // 
    let input_to_num = parseInt(user_input);
    log(`input_to_num: ${typeof (input_to_num)}`);

    // if input is a number then allow tips to calculate
    // else display warning message to user for accepted values
    if (!isNaN(input_to_num)) {
      this.setState({
        // this will allow the tips component to calculate the tip percentages
        showTips: true,
        user_validation_message: false
      });
    }else{
      this.setState({
        showTips: false,
        user_validation_message: true
      });
    }

  }


  // this will update the state of 
  // the input on UserInput.js file
  updateProps = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
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
                submitBill={(input) => this.submitBill(input)}
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
