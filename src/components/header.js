import React, {Component} from 'react';

class Header extends Component {
  render () {
    const {logo} = this.props

    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>LED-App Tekton Labs</h1>
        </div>
        <div className="container">
          <p className="App-intro">
            Presentacion de App que muestra un número en formato LED.<code>src/App.js</code>
          </p>
        </div>
      </div>
    )
  }
}

export default Header
