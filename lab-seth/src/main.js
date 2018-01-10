'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import * as cowsay from 'cowsay';
import faker from 'faker';

class Cowsay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.content = cowsay.say({
      text: `I am a cow and I will ${faker.hacker.verb(2)} your phone to ${faker.hacker.adjective(2)}!` ,
    });
  }

  changeSaying() {
    this.setState({
      content: cowsay.say({
        text: `I am a cow and I will ${faker.hacker.verb(2)} your phone to ${faker.hacker.adjective(2)}!`,
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeSaying()}> Click Here to Say the Cow</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Cowsay />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));