'use strict';

import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import * as cowsay from 'cowsay'
import faker from 'faker'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  createMenuItems(event) {
    if(event.target.value === 'cow')
      setState({text: this.state.content})
    
    if(event.target.value === 'turtle')
      setState({text: this.state.content, cow: cowsay.TURTLE})
    
    if(event.target.value === 'kiss')
      setState({text: this.state.content, cow: cowsay.KISS})

    if(event.target.value === 'whale')
      setState({text: this.state.content, cow: cowsay.WHALE})
  }

  render() {
    return (
      <div>
        <header className='cowsay-hello'>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <button onClick ={this.handleClick}>Click Me</button>

  
       
      <select name="animals">
        <option value="cow">Cow</option>
        <option value="turtle">Turtle</option>
        <option value="kiss">Kiss</option>
        <option value="whale">Whale</option>
      </select>
        <pre>{cowsay.say({text: this.state.content})}</pre>
        <pre>{cowsay.say({text: this.state.content, cow: cowsay.TURTLE})}</pre>
        <pre>{cowsay.say({text: this.state.content, cow: cowsay.KISS})}</pre>
        <pre>{cowsay.say({text: this.state.content, cow: cowsay.WHALE})}</pre>
        
        
        
        <li>Catherine Looper<a href="https://github.com/ccloops" target="blank"><img src="../asset/ghicon.png"/></a></li>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));