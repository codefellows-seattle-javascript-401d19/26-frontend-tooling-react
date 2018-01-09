import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

import { say } from 'cowsay';
import faker from 'faker';

import Animals from './animals'

class App extends React.Component {
  render() {
    return (
      <div>
        <Animals/>
        <Animals/>
        <Animals/>
        <Animals/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
