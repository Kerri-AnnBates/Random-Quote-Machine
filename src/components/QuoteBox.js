import React, { Component } from 'react'
import axios from 'axios';

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			randomNum: 0,
			randomQuote: {},
			quotes: []
		}
		this.getNewQuote = this.getNewQuote.bind(this);
	}

	getNewQuote() {
		this.setState({
			randomQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
		});
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
		return (
			<div id="quote-box">
				<h1>Quote Box</h1>
				<div id="text">{this.state.randomQuote.quote}</div>
				<div id="author">{this.state.randomQuote.author}</div>
				<button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
				<a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
			</div>
		)
	}
}
export default QuoteBox;
