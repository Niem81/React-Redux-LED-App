import React, {Component} from 'react'
import {Field, reduxform} from 'redux-form'
import {Form, ControlLabel, Button, FormControl, FormGroup} from 'react-bootstrap'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {selectNumber, selectDot} from '../actions/index'
//
// const formInstance = (
//   <Form inline>
//     <FormGroup controlId="formInlineNumber">
//       <ControlLabel>Ingrese Número: </ControlLabel>
//       {' '}
//       <FormControl type="text"
//                   placeholder="Numero del 0 a 9"
//                   value={this.state.newInput}
//                   onChange={e => this.setState({newInput: e.target.value})}
//                 />
//     </FormGroup>
//     {' '}
//     <Button type="submit"
//             bsStyle="success"
//             onClick={this.handleNumber}>
//       Mostrar
//     </Button>
//   </Form>
// );

class NumberInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newInput: ''
    }

    this.handleNumber = this.handleNumber.bind(this)
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



  render () {
    return (
      <div>
        <Form inline>
          <FormGroup controlId="formInlineNumber">
            <ControlLabel>Ingrese Número: </ControlLabel>
            {' '}
            <FormControl type="text"
                        placeholder="Numero del 0 a 9"
                        value={this.state.newInput}
                        onChange={e => this.setState({newInput: e.target.value})}
                      />
          </FormGroup>
          {' '}
          <Button
                  bsStyle="success"
                  onClick={this.handleNumber}>
            Mostrar
          </Button>
        </Form>
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
