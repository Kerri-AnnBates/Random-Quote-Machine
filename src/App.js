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
			],
			randomNum: 0
		}
		this.getRandomNumForColor = this.getRandomNumForColor.bind(this);
	}

	getRandomNumForColor() {
		const randomNum = Math.floor(Math.random() * this.state.colors.length);
		this.setState({
			randomNum
		});
	}

	componentDidMount() {
		this.getRandomNumForColor()
	}

	render() {
		return (
			<div className="App" style={{ backgroundColor: this.state.colors[this.state.randomNum] }}>
				<h1 className="main-title">Random Quote Machine</h1>
				<QuoteBox
					mainColor={this.state.colors[this.state.randomNum]}
					getRandomNumForColor={this.getRandomNumForColor}
				/>
			</div>
		)
	}
}

export default App;
