'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

class Cowsay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.content = say({
      text: faker.lorem.words(5),
    });
    console.log(this.state);

  }

  render() {
    return (
      <div className='cowsay'>
      <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<Cowsay />, document.getElementById('root'));