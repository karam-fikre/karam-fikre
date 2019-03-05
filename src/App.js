import React, { Component } from 'react';
import Header from './components/header.js';
import Intro from './components/intro.js';
import Experiences from './components/experiences.js';
import './styles/App.css';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Intro />
				<Experiences/>
			</div>
		);
	}
}

export default App;
