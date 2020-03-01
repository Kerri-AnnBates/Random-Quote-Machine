import React, { Component } from 'react'
import axios from 'axios';

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			randomQuote: {},
			quotes: []
		}
		this.getNewQuote = this.getNewQuote.bind(this);
	}

	getNewQuote() {
		this.setState({
			randomQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
		});
		this.props.getRandomNumForColor();
	}

	dynamicStyles = {
		backgroundColor: this.props.mainColor,
		transition: 'all 1s'
	}

	componentDidMount() {
		axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
			.then(res => {
				const quotes = res.data.quotes;
				console.log(quotes);

				this.setState({
					randomQuote: quotes[Math.floor(Math.random() * quotes.length)],
					quotes: quotes
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		const dynamicColorStyles = {
			backgroundColor: this.props.mainColor,
			transition: 'all 1s'
		}

		const dynamicTextStyles = {
			color: this.props.mainColor,
			transition: 'all 1s'
		}

		return (
			<div id="quote-box">
				<div id="text" style={dynamicTextStyles}><p>{this.state.randomQuote.quote}</p></div>
				<div id="author"><p>-{this.state.randomQuote.author}</p></div>
				<div className="button-wrapper">
					<button id="new-quote"
						onClick={this.getNewQuote}
						style={dynamicColorStyles}
					>New Quote</button>
					<a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
				</div>
			</div>
		)
	}
}
export default QuoteBox;
