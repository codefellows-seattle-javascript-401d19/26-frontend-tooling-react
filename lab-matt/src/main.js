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
  }

  render() {
    return (
      <div>
        <pre style={randomColor()} className='cow'>{ say({text: this.state.content}) }</pre>
        <button onClick={this.click}>click me</button>
      </div>
    )
  }
}

function randomColor() {
  let color1 = Math.floor(Math.random() * 250);
  let color2 = Math.floor(Math.random() * 250);
  let color3 = Math.floor(Math.random() * 250);
  let styles = {
    backgroundColor: `rgb(${color1}, ${color2}, ${color3})`,
  }
  return styles;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <Cow content='Click the Button To Randomize My Text' />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('dump'))