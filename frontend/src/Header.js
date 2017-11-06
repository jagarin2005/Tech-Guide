import React, { Component } from 'react';
import NavLink from './components/NavLink';
import './style.css';

class Header extends Component {

  render() {
    return (
      <header className="row">
        <section className="col-xs-12">
            <img className="logo img-circle img-responsive" src="./images/logo.png" alt="logo" />
            <NavLink />
        </section>
      </header>
    )
  }
}

export default Header;