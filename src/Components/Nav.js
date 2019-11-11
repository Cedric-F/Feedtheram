import React from 'react';
import {Link} from "react-router-dom";
import {Navbar} from 'react-bootstrap';

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