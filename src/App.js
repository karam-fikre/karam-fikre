import React, { Component } from 'react';
import Header from './components/header.js';
import Intro from './components/intro.js';
import Experiences from './components/experiences.js';
import Footer from './components/footer.js';
import './styles/App.css';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Intro />
				<Experiences />
				<Footer/>
			</div>
		);
	}
}

export default App;
