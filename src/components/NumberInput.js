import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectNumber} from '../actions/index'

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
    this.props.selectNumber(number);
  }

  render () {
    return (
      <div>
        <label htmlFor="ledNumb">Ingrese Número:</label>
        <input id="ledNumb" type="text" value={this.state.newInput} onChange={e => this.setState({newInput: e.target.value})}/>
        <button className="App-btn" onClick={this.handleNumber} >Modificar</button>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    new: state.newInput
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectNumber:selectNumber}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NumberInput);
