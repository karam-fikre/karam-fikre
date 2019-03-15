import React, { Component } from 'react';
import Intro from './components/intro.js';
import NavMenu from './components/NavMenu';
import './styles/App.css';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Intro />
				<NavMenu/>
			</div>
		);
	}
}

export default App;
