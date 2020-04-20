import React, { Component } from 'react';
import axios from 'axios';
import ParkData from './components/ParkData';
import SearchAnimal from './components/SearchAnimal';
import DisplayOwnRecord from  './components/DisplayOwnRecord';
import DisplayAnimals from './components/DisplayAnimals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      parkEvents: null,
      retrieveAnimal: null,
      profileRecords: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  /*
  RetrieveAnimals is the name of animal that the Client is searching for.
  RetrieveAnimals needs to be able to convert common animal names into their Scienticfic names to be easily queried by databases.

  ParkEvents is collected by an API call to the National Park Services API to fetch "Alerts". I have specified my response to only contain alerts pertaining rto "COVID-19".

  */

  componentDidMount() {
    axios.get('/fetchParkData')
      .then( ({ data }) => data)
      .catch(err =>
        console.log('** Error retrieving Park Data **', err));
    console.log('this.state.parkevents: ', this.state.parkEvents)
  }
  handleChange(e) {
    e.preventDefault();
    const { target } = e;
    const { search, retrieveAnimal } = this.state;
    this.setState({
      [target.name]: target.value });
    console.log('retrieveAnimal: ', retrieveAnimal);
  }
  render() {
    const { parkEvents, retrieveAnimal, search , profileRecords} = this.state;
    return (
      <div id="main">
        <ParkData parkEvents={parkEvents} />
        <SearchAnimal
          search={search}
          retrieveAnimal={retrieveAnimal}
          handleChange={this.handleChange}
        />
        <DisplayOwnRecord
          profileRecords={profileRecords}

        />
         <DisplayAnimals
          retrieveAnimal={retrieveAnimal}
         />
      </div>
    )

  }
}

export default App;
