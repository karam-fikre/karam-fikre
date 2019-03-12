import React, { Component } from 'react';
import Intro from './components/intro.js';
import './styles/App.css';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Intro />
			</div>
		);
	}
}

export default App;
