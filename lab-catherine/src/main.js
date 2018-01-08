'use strict';

import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'

class Cow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='cowsay-hello'>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Good Day Cowsay',
      content: 'What do you say cowsay?',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {
        content: faker.random.words()
      }
    })
  }

  render() {
    return (
      <div>
      <Cow/>
      <button onClick ={this.handleClick}>clickity click</button>
      <pre>{cowsay.say({text: this.state.content})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));