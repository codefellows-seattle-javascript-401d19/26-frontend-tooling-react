'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'YOYOYO?',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {      
        content: faker.random.words(),
      };
    });
  }

  render() {
    return (
      <div>
        <header className='cowsay-hello'>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <button onClick ={this.handleClick}>click me</button>
        <pre>{cowsay.say({text: this.state.content})}</pre>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));