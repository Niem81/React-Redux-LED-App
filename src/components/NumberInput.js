import React, {Component} from 'react';
// import {Field, reduxform} from 'redux-form';
import {Form, ControlLabel, Button, FormControl, FormGroup} from 'react-bootstrap';

class NumberInput extends Component {

  constructor () {
    super();
    this.handleReset = this.handleReset.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleReset () {
    this.props.onReset();
  }

  handleInput (e) {
    console.log(e.target.value);
    this.props.onChange(e.target.value);
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

  render () {
    const {value} = this.props;

    return (
      <div>
        <Form inline>
          <FormGroup controlId="formInlineNumber">
            <ControlLabel>Ingrese Número: </ControlLabel>
            {' '}
            <FormControl type="text"
                        placeholder="Numero del 0 a 9"
                        value={value}
                        onChange={this.handleInput}
                        // onChange={e => this.props({value: e.target.value})}
                      />
          </FormGroup>
          {' '}
          {/* <Button
                  bsStyle="primary"
                  onClick={this.handleNumber}>
            Mostrar
          </Button>
          {' '} */}
          <Button
                  bsStyle="success"
                  onClick={this.handleReset}>
            Reset
          </Button>
        </Form>
        <div className="slider-container">
          <input id="ledNumb" type="range" min="0" max="9" value={value} onChange={this.handleInput}/>
        </div>
      </div>
    )
  }

}

export default NumberInput;
