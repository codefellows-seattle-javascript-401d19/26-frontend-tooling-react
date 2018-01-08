// import './src/main.scss'
import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    // this.state.content = this.props.content;
    this.generateCowsay = this.generateCowsay.bind(this);
  }

  generateCowsay() {

  }

  render() {
    return (
      <div className = 'app'>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={generateCowsay}>Click Me</button>
        <pre>{App.state.content}</pre>
      </div>
    );
  }
}

// function generateCowsay = () => {
// //create a new div
// //fill it with text
// //add it to the page
// }

ReactDom.render(<App/>, document.getElementById('root'));
