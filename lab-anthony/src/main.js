'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';



class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
    };
  }
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem {this.state.title}</h1>
      </header>);
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'PUSH BUTTON FOR COW',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      content: cowsay.say({
        text: faker.lorem.words(5),
      }),
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <div className='buttonDiv'>
          <input type="button" value='MOOOOO' className='button' onClick={this.handleClick}/>
        </div>
        <div className="cowsay-content">
          <pre>{this.state.content}</pre>
        </div>
      </div>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('root'));
