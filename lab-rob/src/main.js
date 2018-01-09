import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.getCow(),
    };

    this.changeCow = this.changeCow.bind(this);
  }

  getCow() {
    return say({text: faker.hacker.phrase()});
  }

  changeCow() {
    this.setState({content: this.getCow()});
  }

  getColor() {
    let value = () => Math.floor(Math.random() * 256);
    let value1 = value();
    let value2 = value();
    let value3 = value();

    return {
      color: `rgb(${value1}, ${value2}, ${value3}`,
      backgroundColor: `rgb(${255 - value1}, ${255 - value2}, ${255 - value3}`,
    };
  }

  render() {
    return (
    <div style={this.getColor()} className='cow'>
      <h2>Get Cowsay Lorem</h2>
      <button onClick={this.changeCow}>Click Me!</button>
      <pre>{this.state.content}</pre>
    </div>
    );
}
}

class App extends React.Component {
  render() {
    return (
    <div className='cowBlock'>
      <h1>Cowsay React!</h1>
      <Cow/>
      <Cow/>
      <Cow/>
      <Cow/>
      <Cow/>
      <Cow/>
    </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));