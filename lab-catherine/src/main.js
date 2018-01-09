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
    this.createMenuItems = this.createMenuItems.bind(this);
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
      this.setState({cow: ''})
    
    if(event.target.value === 'turtle')
      this.setState({cow: cowsay.TURTLE})
    
    if(event.target.value === 'stegosaurus')
      this.setState({cow: cowsay.STEGOSAURUS})

    if(event.target.value === 'whale')
      this.setState({cow: cowsay.WHALE})

    if(event.target.value === 'squirrel')
      this.setState({cow: cowsay.SQUIRREL})
  }

  render() {
    return (
      <div>
        <header className='cowsay-hello'>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <button onClick ={this.handleClick}>Click Me</button>
      <select onChange={this.createMenuItems} name="animals">
        <option value="select">Select One!</option>      
        <option value="cow">Cow</option>
        <option value="turtle">Turtle</option>
        <option value="stegosaurus">Stegosaurus</option>
        <option value="whale">Whale</option>
        <option value="squirrel">Squirrel</option>        
      </select>
        <pre>{cowsay.say({text: this.state.content, cow: this.state.cow})}</pre>
     
        
        <li>Catherine Looper<a href="https://github.com/ccloops" target="blank"><img src="../asset/ghicon.png"/></a></li>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));