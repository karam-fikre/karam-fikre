import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div >
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#">Karam-Fikre</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#Experiences">Experiences</Nav.Link>
							<Nav.Link href="#Projects">Projects</Nav.Link>
							<Nav.Link href="#About">About</Nav.Link>
							<Nav.Link href="#Contact">Contact me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;