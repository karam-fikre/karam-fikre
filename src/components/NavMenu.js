import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavMenu extends Component {
	render() {
		return (
			<section id="navmenu" >
				<ul>
					<Link to="/"><i>Start</i></Link>
					<Link to="/about"><i>About</i></Link>
				</ul>
			</section>
		);
	}
}

export default NavMenu;