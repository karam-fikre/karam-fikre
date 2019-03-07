import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<section id="footer">
				<ul className="socialIcons">
					<li className="github"><a href="#"><i className="fa fa-fw fa-github"></i>Github</a></li> 
					<li className="linkedin"><a href="#"><i className="fa fa-fw fa-linkedin"></i>Linked-in</a></li> 
					<li className="google"><a href="#"><i className="fa fa-fw fa-google"></i>Mail</a></li>
				</ul>
			</section>
		)
	}
}

export default Footer
