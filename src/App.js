import React, { Component } from 'react';
import Header from './components/header.js';
import bodyBackgroundVideo from './files/bodyBackgroundVideo.mp4';
import './styles/App.css';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<video className='bg'alt="bg" autoPlay loop muted>
    		<source src={bodyBackgroundVideo} type='video/mp4' />
				</video>
			</div>
		);
	}
}

export default App;
