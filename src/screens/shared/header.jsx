import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="sound-head">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <div className="nav-item nav-logo">
                Sound Bytes
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-item">
                <div className="nav-search">
                  <i className="icon ion-search" />
                  <input type="text" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
