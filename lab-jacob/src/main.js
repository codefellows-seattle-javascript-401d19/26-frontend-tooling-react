'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import * as say from 'cowsay';

class Cow extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {};

    this.state.talk = faker.lorem.words(3)
    this.state.animal = say.DEFAULT

    this.sayMoreClickButton = this.sayMoreClickButton.bind(this)
    this.changeCowState = this.changeCowState.bind(this)
  }

  sayMoreClickButton(){
   this.setState({talk : faker.lorem.words(4)})
  }

  changeCowState(){
   return (!this.state.animal.includes('The Whitespace Dragon')) ? this.setState({animal : say.DRAGON}) : this.setState({animal : say.DEFAULT})
  }
 
  render(){
    return(
     <div> 
      <h1> Cowsay </h1>
      <pre>{say.think({text : `${this.state.talk}`,
      cow: `${this.state.animal}`
      })} </pre>
      <button onClick = {this.sayMoreClickButton}> Say More </button>
      <button onClick = {this.changeCowState}> Change Cow </button>
     </div>
    )
  }

}

ReactDom.render(<Cow/>, document.getElementById('root'))