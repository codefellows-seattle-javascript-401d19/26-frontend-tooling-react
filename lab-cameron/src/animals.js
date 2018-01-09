import React from 'react';
import ReactDom from 'react-dom';

import { say, BONG, DAEMON, SQUIRREL } from 'cowsay';
import faker from 'faker';

module.exports = class Animal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: faker.lorem.words(4),
      cow: '',
    };

    this.buttonClicked = this.buttonClicked.bind(this);
    this.menuClicked = this.menuClicked.bind(this);
  }

  buttonClicked() {
    this.setState({ content: faker.lorem.words(4) })
  }

  menuClicked(event) {
    if (event.target.value === 'BONG') {
      this.setState({ cow: BONG })
    }
    if (event.target.value === 'DAEMON') {
      this.setState({ cow: DAEMON })
    }
    if (event.target.value === 'SQUIRREL') {
      this.setState({ cow: SQUIRREL })
    }
    if (event.target.value === 'COW') {
      this.setState({ cow: '' })
    }
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <pre>{say({ text: this.state.content, cow: this.state.cow})}</pre>
        <button onClick={this.buttonClicked}>click me</button>
        <select onChange={this.menuClicked}>
          <option value='COW'>Cow</option>
          <option value='BONG'>Bong</option>
          <option value='DAEMON'>Daemon</option>
          <option value='SQUIRREL'>Squirrel</option>
        </select>
      </div>
    )
  }
}
