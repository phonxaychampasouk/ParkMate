/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const rp = require('request-promise');
const cors = require('cors');
const app = express();
const db = require('../database');

const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/fetchParkData', (req,res) => {
let parkEvents=[];
const options = {
      uri: 'https://developer.nps.gov/api/v1/alerts?q=covid&limit=10&api_key=RYDXLqvgSZRPuLtkPZhC8Nh4eZFv0b6ctDTvOzag',
      headers: { 'User-Agent': 'Request-Promise' },
      json: true
      };
rp(options)
   .then( ({ data }) => data.forEach(event=>
       parkEvents.push(
          {  title: event.title,
             description: event.description,
             url: event.url  }
       ))).then(()=>res.send(parkEvents))
       .catch(err=>console.log('** Error with fetching Park Data', err))
});

app.get('/fetchAnimalImages/:query', (req,res) => {
   const invalidQuery = req.params.query
   const search = invalidQuery.replace(" ","+");
   console.log('search', search )
   let searchResults = [];
   var options = {
      uri: `https://pixabay.com/api/?key=16129018-01327812094cdee813e33175d&q=${search}&image_type=photo&pretty=true&per_page=25`,
      headers: { 'User-Agent': 'Request-Promise' },
      json: true
      };
   rp(options)
      .then(({ hits })=>hits.forEach(images=>
         searchResults.push({url:images.webformatURL, tags: images.tags })))
      .then(()=>res.send(searchResults));
})

app.get('/animals/find/:animal',(req, res) => {
   db.retrieveAnimalRecord(req.params.animal)
   .then((result)=>res.send(result))
   .catch(e=>console.log('**Error with retrieve Animal Records', e))
})

// app.post(/'/animals/add/:animal', (req,res) => {
//    db.insertAnimalRecord(req )
// })

app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));

module.export = app;
