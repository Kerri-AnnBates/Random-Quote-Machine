import React, { Component } from 'react';
import './styles/app.scss';
import QuoteBox from './components/QuoteBox';

class App extends Component {
	constructor() {
		super();

		this.state = {
			colors: ['#EB5855']
		}
	}
	render() {
		return (
			<div className="App" style={{ backgroundColor: this.state.colors[0] }}>
				<h1 className="main-title">Random Quote Machine</h1>
				<QuoteBox />
			</div>
		)
	}
}

export default App;
