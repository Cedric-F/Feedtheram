import React from 'react';
import {Link} from "react-router-dom";
import {Navbar} from 'react-bootstrap';

/**
 * Composant du header (nav par abus de langage)
 * Ne fait rien de spécial
 */

class Nav extends React.Component {
  render() {
    return (
      <Navbar className="head" bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Feed the Ram</Link></Navbar.Brand>
      </Navbar>
    )
  }
}

export default Nav;