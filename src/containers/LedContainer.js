import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectNumber, selectDot, resetLed} from '../actions/index'
import {bindActionCreators} from 'redux'

import Header from '../components/Header'
import Led from '../components/Led'
import NumberInput from '../components/NumberInput'
import Footer from '../components/Footer'
import logo from '../logo.svg';
import '../App.css';

const SweetAlert = require('react-swal');

class LedView extends Component {

  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  componentWillMount(){
    console.log("Mounting  Component")
    console.log(this.state)
  }

  handleInput (number){
    // Check if reset
    if (number === 'reset') {
      this.props.resetLed()
    } else {
      // Check if it is not number
      if (isNaN(number)){
        if (number === ".") {
          console.log("ITS a dot");
          this.props.selectDot(number);
        } else {
          // <SweetAlert isOpen={true}
          //   type="warning"
          //   text="Debes ingresar un número"
          //   confirmButtonText="Yup" />
          alert("Debes ingresar un número");
        }
      } else {
        this.props.selectNumber(number);
      }
    }

  }

  render (){
    const {numb} = this.props

    return (
      <div className="App">
        <Header logo={logo}/>
        <NumberInput onChange={this.handleInput} />
        <Led numb={numb}/>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    numb: state.activeNumber,
    segments: state.segments
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(Object.assign({selectNumber:selectNumber}, {selectDot:selectDot}, {resetLed:resetLed}), dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LedView)
