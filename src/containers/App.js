import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import store from '../store';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import FuelGage from '../components/FuelGage';
import FuelGageControls from '../components/FuelGageControls';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="m-5">
          <Row>
            <Col className="m-5">
              <h2>Fuel Gage Controls</h2>
              <FuelGageControls 
                className="my-5"
                value="1"
                increment={() => store.dispatch({ type: 'INCREMENT', value: 1 })}
                decrement={() => store.dispatch({ type: 'DECREMENT', value: 1 })}
              />
              <FuelGageControls 
                className="my-5"
                value="10"
                increment={() => store.dispatch({ type: 'INCREMENT', value: 10 })}
                decrement={() => store.dispatch({ type: 'DECREMENT', value: 10 })}
              />
            </Col>
            <Col className="m-5">
              <FuelGage
                value={this.props.value}
              />
              <ProgressBar animated now={this.props.value.crement} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

export default connect(mapStateToProps)(App);
