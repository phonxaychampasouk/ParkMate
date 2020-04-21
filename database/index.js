const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'parkmate',
})
client.connect()
.catch(err => console.error('error connecting', err.stack))

var rat = 'rat';
module.exports.retrieveAnimalRecord = (commonName) => {
return client.query(`SELECT * FROM named inner join characteristics on characteristics.sciname = named.sciname WHERE comname LIKE '%${rat}%' ;`)
}

module.exports.insertAnimalRecord = (fname, lname, tags) => {
return client.query(`INSERT INTO capture (fname, lname. tags) VALUES (${fname}, ${lname}, ${tags}); `)
}
