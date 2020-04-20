import React, { Component } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import ParkData from './components/ParkData';
import SearchAnimal from './components/SearchAnimal';
// import DisplayOwnRecord from  './components/DisplayOwnRecord';
import DisplaySearchModal from './modals/DisplaySearchModal';
// import DisplayParkData from './components/DisplayParkData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      parkAlerts: [],
      retrieveAnimal: null,
      profileRecords: null,
      displayAnimals: null,
      modalId: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchParkData = this.fetchParkData.bind(this);
    this.fetchAnimalImages = this.fetchAnimalImages.bind(this);
  }
  /*
  RetrieveAnimals is the name of animal that the Client is searching for.
  RetrieveAnimals needs to be able to convert common animal names into their Scienticfic names to be easily queried by databases.

  ParkAlerts is collected by an API call to the National Park Services API to fetch "Alerts". I have specified my response to only contain alerts pertaining rto "COVID-19".

  ProfileRecords will query the users database to display the animals, routes and location of their submissions.
  */

  componentDidMount() {
    this.fetchParkData()
  }
  async fetchParkData() {
    return await axios.get('/fetchParkData').then(({ data }) => this.setState({
      parkAlerts: data,
    })).catch(e=>console.log('** Error with ferching Park Data', e))

  }
  async fetchAnimalImages() {
    const { modalId, search } = this.state;
    return await axios.get(`/fetchAnimalImages/${search}`)
      .then(({ data }) => this.setState({
        displayAnimals: data,
      }))
      .catch(e => console.log('**Error with retrieving Animal Images**', e))

  }
  handleChange(e) {
    e.preventDefault();
    const { target } = e;
    const { search, retrieveAnimal } = this.state;
    this.setState({
      [target.name]: target.value
    });
    console.log('this.state.search: ', this.state.search)
  }
  handleSubmit(e) {
    const { modalId } = this.state;
    e.preventDefault();
    this.fetchAnimalImages();
    this.setState({
      modalId: !modalId,
    })

    // const { modalId, search } = this.state;
    // console.log('search', search)
    // axios.get(`/fetchAnimalImages/${search}`)
    //   //TODO: save response to DisplaySearch
    //   .then(() => console.log(modalId))
    //   .catch(e => console.log('**Error with retrieving Animal Images**', e))
  }
  render() {
    const { parkAlerts, retrieveAnimals, search, profileRecords,
      DisplayOwnRecord, displayAnimals, modalId } = this.state;
    if (!modalId) {
      return (
        <div id="main">
          <ParkData parkAlerts={parkAlerts} />
          <SearchAnimal
            search={search}
            retrieveAnimal={retrieveAnimals}
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
      console.log('displayAnimals in modal: ', displayAnimals)
      console.log('retrieveAnimals', retrieveAnimals)
      return (
        <DisplaySearchModal
          retrieveAnimals={retrieveAnimals}
          displayAnimals={displayAnimals}
          fetchAnimalImages={this.fetchAnimalImages}
        />
      )
    }
  }
}

export default App;
