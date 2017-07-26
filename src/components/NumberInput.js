import React, {Component} from 'react'
// import {Field, reduxform} from 'redux-form'
import {Form, ControlLabel, Button, FormControl, FormGroup} from 'react-bootstrap'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {selectNumber, selectDot} from '../actions/index'


class NumberInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newInput: ''
    }
    this.handleReset = this.handleReset.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleNumber() {
    console.log(this.state);
    var number = this.state.newInput
    this.props.onChange(number)
    // if (isNaN(number)){
    //   if (number === ".") {
    //     console.log("ITS a dot");
    //     this.props.selectDot(number);
    //   } else {
    //     alert("Debes ingresar un número");
    //   }
    // } else {
    //   this.props.selectNumber(number);
    // }
  }

  handleReset() {
    const number = "reset"
    this.setState({newInput: ''})
    this.props.onChange(number)
  }

  handleInput (e) {
    console.log(e.target.value)
    this.setState({newInput:e.target.value});
    // var number = this.state.newInput
    // console.log(number)
    this.props.onChange(e.target.value);
  }

  render () {
    const {newInput} = this.state

    return (
      <div>
        <Form inline>
          <FormGroup controlId="formInlineNumber">
            <ControlLabel>Ingrese Número: </ControlLabel>
            {' '}
            <FormControl type="text"
                        placeholder="Numero del 0 a 9"
                        value={newInput}
                        onChange={e => this.setState({newInput: e.target.value})}
                      />
          </FormGroup>
          {' '}
          <Button
                  bsStyle="primary"
                  onClick={this.handleNumber}>
            Mostrar
          </Button>
          {' '}
          <Button
                  bsStyle="danger"
                  onClick={this.handleReset}>
            Reset
          </Button>
        </Form>
        <div className="slider-container">
          <input id="ledNumb" type="range" min="0" max="9" value={this.state.newInput} onChange={this.handleInput}/>
        </div>
        {/* <p>-</p>
        <label htmlFor="ledNumb">Ingrese Número:</label>
        <input id="ledNumb" type="text" value={this.state.newInput} onChange={e => this.setState({newInput: e.target.value})}/>
        <button className="App-btn" onClick={this.handleNumber} >Modificar</button> */}
      </div>
    )
  }

}

// function mapStateToProps(state){
//   return {
//     new: state.newInput
//   }
// }

// function matchDispatchToProps(dispatch){
//   return bindActionCreators(Object.assign({selectNumber:selectNumber}, {selectDot:selectDot}), dispatch);
// }

// export default connect(mapStateToProps, matchDispatchToProps)(NumberInput)
export default NumberInput
