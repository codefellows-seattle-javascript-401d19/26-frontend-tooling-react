// import './src/main.scss'
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.generateText = this.generateText.bind(this);
  }

  generateText() {
    this.setState({content: 'groot'});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.generateText}>Click Me</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
