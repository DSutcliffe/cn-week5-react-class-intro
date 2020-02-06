import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

// Same as line below "React. not required! add ", { Component }" after import React
// class App extends Component {
class App extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  */

  // This replaces the commented out text above - what people use now...
  state = {
    counter: 0,
    footballClub: "MUFC"
  }

  // Use arrow function in classes. If use function XXX more code is required...
  greeting = () => {
    console.log("Hello Danny")
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  changeClub = () => {
    this.setState({
      footballClub: this.state.footballClub = "Barca"
    })
  }

  render() {
    return(
      <div>

        <h1>My First React Component</h1>
        <h1>My Current Counter is {this.state.counter}</h1>
        <h1>My Club is {this.state.footballClub}</h1>
        <button onClick={this.greeting}>HELLO</button>
        <button onClick={this.increment}>Increment My Counter</button>
        <button onClick={this.decrement}>Decrement My Counter</button>
        <button onClick={this.changeClub}>Change Football Club</button>

      </div>
      
    )
  }
}

export default App;
