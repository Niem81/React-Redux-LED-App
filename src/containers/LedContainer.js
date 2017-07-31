import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import {bindActionCreators} from 'redux';

import Header from '../components/Header';
import LedDisplay from '../components/LedDisplay';
import NumberInput from '../components/NumberInput';
import Footer from '../components/Footer';
import logo from '../logo.svg';
import '../App.css';

// const SweetAlert = require('react-swal');

class LedView extends Component {

  constructor (props) {
    super(props);
    console.log(this.props);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount () {
    console.log("Mounting  Component");
    console.log(this.state);
    console.log(this.props);
  }

  componentDidUpdate () {
    console.log(this.state);
    console.log(this.props);
  }

  handleInput (number) {
    if (isNaN(number)) {
      if (number === ".") {
        console.log("ITS a dot");
        this.props.actions.selectDot(number);
      } else {
        // <SweetAlert isOpen={true}
        //   type="warning"
        //   text="Debes ingresar un número"
        //   confirmButtonText="Yup" />
        alert("Debes ingresar un número");
      }
    } else {
      this.props.actions.selectNumber(number);
    }
  }

  render() {
    console.log(this.props);
    const {inputValue} = this.props.numb;

    return (
      <div className="app">
        <Header logo={logo}/>
        <NumberInput
          value={inputValue}
          onChange={this.handleInput}
          onReset={() => { this.props.actions.resetLed() }}
        />
        <LedDisplay numb={this.props.numb}/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { numb: state.activeNumber };
}

function matchDispatchToProps(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, matchDispatchToProps)(LedView);
