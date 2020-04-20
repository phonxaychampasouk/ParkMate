/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const rp = require('request-promise');
const app = express();
//const db = require('../database/index.js');

const PORT = 4000;
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
   const search = invalidQuery.replace(' ', '+');
   var options = {
      uri: `https://pixabay.com/api/?key=16129018-01327812094cdee813e33175d&q=yellow+flowers&image_type=photo`,
      headers: { 'User-Agent': 'Request-Promise' },
      json: true
      };
   rp(options)
      .then(({ data })=>console.log('date', data))

// axios.get('')
})

app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));

module.export = app;
