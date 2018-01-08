'use strict';

import './src/main.js'
import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.content = this.props.content;
    this.generateCowsay = this.generateCowsay.bind(this);
  }
}

function generateCowsay() => {

}

// class App extends React.Component {
  render() {
    return (
      <button onClick={generateCowsay}>Click Me</button>
      <pre>{App.state.content}</pre>
    );
  }
// }

ReactDom.render(<App/>, document.getElementById('root'));
