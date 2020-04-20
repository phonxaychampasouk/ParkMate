import React, { Component } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import ParkData from './components/ParkData';
import SearchAnimal from './components/SearchAnimal';
// import DisplayOwnRecord from  './components/DisplayOwnRecord';
//import DisplaySearch from './components/DisplaySearch';
// import DisplayParkData from './components/DisplayParkData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      parkEvents: [],
      retrieveAnimal: null,
      profileRecords: null,
      displayAnimals: null,
      modalId: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchParkData = this.fetchParkData.bind(this);
  }
  /*
  RetrieveAnimals is the name of animal that the Client is searching for.
  RetrieveAnimals needs to be able to convert common animal names into their Scienticfic names to be easily queried by databases.

  ParkEvents is collected by an API call to the National Park Services API to fetch "Alerts". I have specified my response to only contain alerts pertaining rto "COVID-19".

  ProfileRecords will query the users database to display the animals, routes and location of their submissions.
  */

  componentDidMount() {
    this.fetchParkData()
    // axios.get('/fetchParkData')
    //   .then(({ data }) => this.setState({
    //     parkEvents: data}))
    //   .catch(err =>
    //     console.log('** Error retrieving Park Data **', err));
    // console.log('this.state.parkevents: ', this.state.parkEvents)
  }
async fetchParkData() {

    let response = await axios.get('/fetchParkData').then(({ data })=>this.setState({
      parkEvents: data,
    }))
console.log(this.state.parkEvents)
    // await new Promise((resolve, reject) => console.log('resolve', resolve));

    // // read github user
    // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    // let githubUser = await githubResponse.json();

    // // show the avatar
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    // document.body.append(img);

    // // wait 3 seconds
    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
}
  handleChange(e) {
    e.preventDefault();
    const { target } = e;
    const { search, retrieveAnimal } = this.state;
    this.setState({
      [target.name]: target.value
    });
    console.log('this.state.search', this.state.search)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      search: '',
    })
    const { modalId, search } = this.state;
    console.log('search', search)
    axios.get(`/fetchAnimalImages/${search}`)
      //TODO: save response to DisplaySearch
      .then(()=>this.setState({
        modalId : !modalId,
      })).then(()=>console.log(modalId))
      .catch(e => console.log('**Error with retrieving Animal Images**', e))
  }
  render() {
    const { parkEvents, retrieveAnimal, search, profileRecords,
      DisplayOwnRecord, displayAnimals, modalId } = this.state;
    if (!modalId) {
      return (
        <div id="main">
          <ParkData parkEvents={parkEvents} />
          <SearchAnimal
            search={search}
            retrieveAnimal={retrieveAnimal}
            handleChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
              {/*
        <DisplayOwnRecord
          profileRecords={profileRecords}
        />
          */}
        </div>);
    }
    if (modalId) {
      return (
        <DisplaySearchModal
          retrieveAnimal={retrieveAnimal}
          displayAnimals={displayAnimals}
        />
      )
    }
  }
}

export default App;
