// import './src/main.scss'
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({
        text: 'moo',
      }),
    };

    this.generateText = this.generateText.bind(this);
  }

  generateText() {
    this.setState({content: say({
      text: faker.lorem.words(5),
    }),
    });
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.generateText}>Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
