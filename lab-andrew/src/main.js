'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import * as cowsay from 'cowsay';
import faker from 'faker';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      content: "such moo",
      cow: '',
    }


    this.clickHandle = this.clickHandle.bind(this);
    this.cowMenu = this.cowMenu.bind(this);

  }

  clickHandle(){
    this.setState((state) => {
      return {
        content: faker.hacker.phrase(),
      }
    })
  }

  cowMenu(event){
    if (event.target.value === 'COW'){
      this.setState({cow: ''})
    }
    if (event.target.value === 'DAEMON') {
      this.setState({ cow: cowsay.DAEMON })
    }
    if (event.target.value === 'SQUIRREL') {
      this.setState({ cow: cowsay.SQUIRREL })
    }
    if (event.target.value === 'DOGE') {
      this.setState({ cow: cowsay.DOGE })
    }

  }

  render(){
    return (
      <div>
        <header>
          <h1>Cowsay Lorem</h1>
        </header>
        <button onClick={this.clickHandle}>Click to generate new cow speech</button>
        <select onChange={this.cowMenu}>
          <option value='COW'>Cow</option>
          <option value='DAEMON'>Daemon</option>
          <option value='SQUIRREL'>Squirrel</option>
          <option value='DOGE'>Doge</option>
        </select>
        <pre>{cowsay.say({text: this.state.content, cow: this.state.cow})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))