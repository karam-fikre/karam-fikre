import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavMenu extends Component {
	render() {
		return (
			<section id="navmenu" >
					<Link to="/"><i>Start</i></Link><br></br>
					<Link to="/about"><i>About</i></Link>
			</section>
		);
	}
}

export default NavMenu;