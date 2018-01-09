
import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import cow from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			content: faker.hacker.phrase()
		}
	}

	refreshCow () {
		this.setState({
			content: faker.hacker.phrase()
		})
	}

	render() {
		return (
			<div>
				<h1>Generate Cowsay Lorem</h1>
				<button onClick={() => this.refreshCow()}>Click Me</button>
				<pre>{cow.say({ text: `${this.state.content}` })}</pre>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'))