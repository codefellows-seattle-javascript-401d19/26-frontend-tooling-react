// import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say, STEGOSAURUS} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({
        text: 'cheerio',
        cow: STEGOSAURUS,
      }),
    };

    this.generateText = this.generateText.bind(this);
    this.chooseCow = this.chooseCow.bind(this);
  }

  generateText() {
    this.setState({content: say({
      text: faker.lorem.words(5),
      cow: STEGOSAURUS,
    }),
    });
  }

  chooseCow(event) {
    this.setState({content: say({
      text: faker.lorem.words(5),
      cow: event.target.value,
    }),
    });
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <select value={this.state.value} onChange={this.chooseCow}>
          <option value="COW">cow</option>
          <option value="SQUIRREL">squirrel</option>
          <option value="STEGOSAURUS">stegosaurus</option>
        </select>
        <button onClick={this.generateText}>Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
