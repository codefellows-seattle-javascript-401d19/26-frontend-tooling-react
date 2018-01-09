'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

class Cowsay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.content = say({
      text: `I am a cow and I will ${faker.hacker.verb(2)} your phone to ${faker.hacker.adjective(2)}!` ,
    });
    console.log(this.state);

  }

  changeSaying() {
    this.setState({
      content: say({
        text: `I am a cow and I will ${faker.hacker.verb(2)} your phone to ${faker.hacker.adjective(2)}!`,
      })
    })
  }

  render() {
    return (
      <div className='cowsay'>
      <button onClick={() => this.changeSaying()}> Click Here to Say the Cow</button>
      <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<Cowsay />, document.getElementById('root'));