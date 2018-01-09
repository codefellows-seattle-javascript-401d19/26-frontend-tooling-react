import './style/main.scss';
import React from 'react';
import {say} from 'cowsay';
import faker from 'faker';
import ReactDom from 'react-dom';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: this.props.content };
    console.log(this.cow);

    this.click = this.click.bind(this);
  }
  click() {
    this.setState({content: faker.hacker.phrase()});
    console.log(this.state.content);
  }
  render() {
    return (
      <div>
         <pre className='cow'>{ say({text: this.state.content }) }</pre>
        <button onClick={this.click}>click me</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <Cow content={faker.hacker.phrase()} />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('dump'))