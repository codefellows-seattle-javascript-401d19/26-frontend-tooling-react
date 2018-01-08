import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

import { say } from 'cowsay';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cowText: faker.lorem.words(4) };

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.setState({ cowText: faker.lorem.words(4) })
  }

  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
        <pre>{say({ text: this.state.cowText })}</pre>
        <button onClick={this.buttonClicked}>click me</button>
      </div>
    )
  }
}

ReactDom.render(<App content="Generate Cowsay Lorem"/>, document.getElementById('root'));
