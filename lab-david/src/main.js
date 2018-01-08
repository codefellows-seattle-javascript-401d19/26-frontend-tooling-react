import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Cowsay from 'cowsay'

class Cowsayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.value = this.props.value;
    this.state.content = this.props.content;

    this.increment = this.increment.bind(this)
  }

  render() {
    return (
  )
  }
}

class App extends React.Component {
  render() {
    return (
      (console.log(cowsay.say({
        text : "click me for mooooore",
        e : "oO",
        T : "U "
      })
    )
    )
  }
}

ReactDom.render(<App/>, document.getElementById('anchor'))