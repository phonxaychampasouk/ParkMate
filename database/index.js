const mongoose = require('mongoose');

mongoose.connect('mongodb://locaLhost/TrackingHistory', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to mongoDb');
});

const observedAnimals = new mongoose.Schema({
//TODO: add information users would like to save
});

const singleAnimal = mongoose.model('Image', observedAnimals);

module.exports = singleAnimal;
