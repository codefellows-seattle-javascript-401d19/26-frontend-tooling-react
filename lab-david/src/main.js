'use strict';

import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Cowsay from 'cowsay'

class Cowsayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.value = this.props.value;
    this.state.content = this.props.content;

    this.increment = this.increment.bind(this)
  }

  saySomething() {
    let newPhrase = faker.company.bs();

    this.setState({value: newPhrase})
  }

  render() {
    return (
      <div>
      <button onClick={this.saySomething}>
      Click me
      </button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    <title>Generate Cowsay Lorem</title>
    return (
      <div>
      (Cowsay.say({
        text : "click me for mooooore",
        e : "oO",
        T : "U "
      })
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('anchor'))