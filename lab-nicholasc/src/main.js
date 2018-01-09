'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.content = 'click me';
    this.saysSomethingNew = this.saysSomethingNew.bind(this);
  }

  saysSomethingNew() {
    let says = say({
      text : `I know a man named Nicholas, did you know he ${faker.lorem.words(10)}`
    });

    this.setState({content: says});
  }

  render() {
    return (<button className={'cowsays'}
    onClick={this.saysSomethingNew}>
      <pre>{this.state.content}</pre>
    </button>)
  }
}


ReactDom.render(<App/>, document.getElementById('main'))
