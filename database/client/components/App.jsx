/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import ParkData from './ParkData';
import SearchAnimal from '/SearchAnimal';
import RetrieveAnimal from  '/RetrieveAnimal';

class App extends Component {
  constructor(props); {
    super(props);
    this.state = {
      parkEvents: null;

    }
  }
componetDidMount() {
  axios.get('/fetchParkData')
  .then(res=>
    this.setState({
      parkEvents,
    });)
    .catch(err=>
    console.log('** Error retrieving Park Data **', err ));
}
  render() {
    return (
      <div id= "main">
        <ParkData />
        <SearchAnimal />
        <RetrieveAnimal />
      </div>
    )

  }
}

export default App;
