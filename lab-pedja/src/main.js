'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {say, TUX, GOAT, MOOSE, SATANIC} from 'cowsay';
import faker from 'faker';


class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "click button above",
      cow: '',
    };

    this.click = this.click.bind(this);
    this.menuAnimal = this.menuAnimal.bind(this);
  }

  click() {
    this.setState({ content: faker.hacker.phrase() })
  }

  menuAnimal(event) {
    if (event.target.value === 'COW') {
      this.setState({ cow: ''})
    }
    if (event.target.value === 'GOAT') {
      this.setState({ cow: GOAT})
    }
    if (event.target.value === 'MOOSE') {
      this.setState({ cow: MOOSE})
    }
    if (event.target.value === 'TUX') {
      this.setState({ cow: TUX})
    }
    if (event.target.value === 'SATANIC') {
      this.setState({ cow: SATANIC})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>click me</button>
        <select onChange={this.menuAnimal}>
          <option value='COW'>Cow</option>
          <option value='GOAT'>Goat</option>
          <option value='MOOSE'>Moose</option>
          <option value='TUX'>Tux</option>
          <option value='SATANIC'>Satanic</option>
        </select>
        <pre>{say({ text: this.state.content, cow: this.state.cow })}</pre>
      </div>
    )
  }
}

ReactDom.render(<Cow/>, document.getElementById('root'))