import React from 'react';

function Header({ logo }) {
  return (
    <div>
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>LED-App</h1>
      </div>
      <div className="container">
        <p className="app-intro">
          Presentacion de App que muestra un número en formato LED.
        </p>
      </div>
    </div>
  );
}

export default Header;
