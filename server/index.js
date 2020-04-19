/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const rp = require('request-promise');
const app = express();
//const db = require('../database/index.js');

const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/fetchParkData', (req,res) => {
  console.log('test')
  var options = {
      uri: 'https://developer.nps.gov/api/v1/alerts?q=covid&limit=10&api_key=RYDXLqvgSZRPuLtkPZhC8Nh4eZFv0b6ctDTvOzag',
      headers: { 'User-Agent': 'Request-Promise' },
      json: true
      };
rp(options).then( res =>res.data.forEach(event=>console.log('event', event))).catch(err=>console.log('** Error with fetching Park Data', err))
});

app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));

module.export = app;
