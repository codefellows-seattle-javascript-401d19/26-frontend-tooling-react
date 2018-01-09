'use strict';

import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import {say} from 'cowsay'
import faker from 'faker'

class Cowsayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.content = say({text: 'click me for mooooore'});

    this.saySomething = this.saySomething.bind(this)
  }

  saySomething() {
    let newPhrase = say({text: faker.company.bs(5)});
    this.setState({content: newPhrase});
  }

  render() {
    return (
      <div>
        <button className ="text-s font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-black text-black hover:bg-black hover:text-white" onClick={() => this.saySomething()}> Click me </button>
        <pre>{this.state.content}
        </pre>
    </div>
    )
  }
}


ReactDom.render(<Cowsayer/>, document.getElementById('anchor'))