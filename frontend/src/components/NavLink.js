import React, { Component } from 'react';

class NavLink extends Component {

  render() {
    return(
      <nav className="col-xs-12">
        <a href="/home">Home</a>
        <a href="/service">Service</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>
    </nav>
    )
  }

}

export default NavLink;