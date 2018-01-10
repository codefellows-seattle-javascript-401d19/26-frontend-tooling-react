'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import * as say from 'cowsay';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {};

    this.state.talk = faker.lorem.words(3)
    this.state.content = say.DEFAULT

    this.sayMoreClickButton = this.sayMoreClickButton.bind(this)
    this.changeCowState = this.changeCowState.bind(this)
  }

  sayMoreClickButton(){
   this.setState({talk : faker.lorem.words(4)})
  }

  changeCowState(){
   return (!this.state.content.includes('The Whitespace Dragon')) ? this.setState({content : say.DRAGON}) : this.setState({content : say.DEFAULT})
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

ReactDom.render(<App/>, document.getElementById('root'))