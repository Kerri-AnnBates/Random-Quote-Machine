import React, { Component } from 'react';
import './styles/app.scss';
import QuoteBox from './components/QuoteBox';

class App extends Component {
	constructor() {
		super();

		this.state = {
			colors: [
				'#EB5855',
				'#199E43',
				'#6B2827',
				'#31719E',
				'#6A2CAB',
				'#AA4672',
				'#0F2738'
			]
		}
	}
	render() {
		return (
			<div className="App" style={{ backgroundColor: this.state.colors[0] }}>
				<h1 className="main-title">Random Quote Machine</h1>
				<QuoteBox mainColor={this.state.colors[0]} />
			</div>
		)
	}
}

export default App;
