import React, { Component } from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={'ToDos'} />
        <List tasks={['Mow the lawn', 'walk the Dog']} />
        <List tasks={['Hello world', 'foo', 'bar']} />
      </div>
    );
  }
}

export default Main;
