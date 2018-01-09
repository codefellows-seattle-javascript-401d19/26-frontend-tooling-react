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

    this.buttonClick = this.buttonClick.bind(this)
    this.changeCowState = this.changeCowState.bind(this)
  }

  buttonClick(){
   this.setState({talk : faker.lorem.words(4)})
  }

  changeCowState(){
    (this.setState({animal : say.DRAGON})) ? this.setState({animal : say.DEFAULT}) : this.setState({animal : say.DRAGON}) 
  }
 
  render(){
    return(
     <div> 
      <h1> Cowsay </h1>
      <pre>{say.think({text : `${this.state.talk}`,
      cow: `${this.state.animal}`
      })} </pre>
      <button onClick = {this.buttonClick}> Say More </button>
      <button onClick = {this.changeCowState}> Change Cow </button>
     </div>
    )
  }

}

ReactDom.render(<Cow/>, document.getElementById('root'))