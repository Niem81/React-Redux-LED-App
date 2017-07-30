import React, {Component} from 'react';

class Header extends Component {
  render () {
    const {logo} = this.props;

    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>LED-App</h1>
        </div>
        <div className="container">
          <p className="App-intro">
            Presentacion de App que muestra un número en formato LED.
          </p>
        </div>
      </div>
    )
  }
}

export default Header;
