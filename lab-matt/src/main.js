import './style/main.scss';
import React from 'react';
import {say} from 'cowsay';
import faker from 'faker';
import ReactDom from 'react-dom';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: this.props.content };
  }

  render() {
    return (
      <div>
        <pre style={randomColor()} className='cow'>{ say({text: this.props.content}) }</pre>
        <button onClick={this.props.click}>click me</button>
      </div>
    );
  }
}

function randomColor() {
  let color1 = Math.floor(Math.random() * 250);
  let color2 = Math.floor(Math.random() * 250);
  let color3 = Math.floor(Math.random() * 250);
  let styles = {
    backgroundColor: `rgb(${color1}, ${color2}, ${color3})`,
  };
  return styles;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: faker.hacker.phrase()};
    
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({content: faker.hacker.phrase()});
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <Cow content={this.state.content} click={this.click} />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('dump'));