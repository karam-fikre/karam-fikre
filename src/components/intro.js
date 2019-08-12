import React, { Component } from 'react'

export default class Intro extends Component {
	render() {
		return (
			<ul className="socialIcons">
				<li className="github"><a href="https://github.com/karam-fikre" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-github"></i>Github</a></li> 
				<li className="linkedin"><a href="https://www.linkedin.com/in/karam-aldulaimi-a84538150/" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-linkedin"></i>Linked-in</a></li> 
				<li className="google"><a href="mailto:karamfikre@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-google"></i>Mail</a></li>
			</ul>
		)
	}
}
