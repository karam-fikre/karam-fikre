import React, { Component } from 'react'
import bodyBackgroundVideo from '../files/bodyBackgroundVideo.mp4';


export default class Intro extends Component {
	render() {
		return (
			<section id="intro">
				<div align="left" className="embed-responsive embed-responsive-16by9">
    			<video className="embed-responsive-item hidden-sm-down" autoPlay loop muted>
        		<source  src={bodyBackgroundVideo} type="video/mp4"/>
					</video>
				</div>
			</section>
		)
	}
}
