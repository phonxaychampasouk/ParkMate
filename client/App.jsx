import React, { Component } from 'react';
import axios from 'axios';
import ParkData from './components/ParkData';
// import SearchAnimal from '/SearchAnimal';
// import RetrieveAnimal from  '/RetrieveAnimal';

class App extends Component {
  constructor(props) {
    super(props);console.log('test')
    this.state = {
      parkEvents: null,

    }
  }

componentDidMount() {
  axios.get('/fetchParkData')
  .then(res=>
    this.setState({
      parkEvents,
    }))
    .catch(err=>
    console.log('** Error retrieving Park Data **', err ));
}
  render() {
    const { parkEvents } = this.state;
    return (
      <div id= "main">
        <ParkData parkEvents={parkEvents}/>
       {/* <SearchAnimal />
        <RetrieveAnimal /> */}
      </div>
    )

  }
}

export default App;
