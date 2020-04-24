import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const tasks = ['hello', 'world', 'foo', 'foo', 'bar'];

class List extends Component {
  render() {
    return (
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
