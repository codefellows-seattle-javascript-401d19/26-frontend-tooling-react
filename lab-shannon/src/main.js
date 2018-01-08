'use strict';

const main = require('./src/main');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.content = this.props.content;
  }
}

function generateCowsay() => {

}

// class App extends React.Component {
  render() {
    return (
      <h1>Generate Cowsay Lorem</h1>
      <button onClicke={generateCowsay}>Click Me</button>
      <pre>{App.state.content}</pre>
    );
  }
// }
