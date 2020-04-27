# ParkMate
> An interactive application that allows users to quickly filter for and persist data from animal sighting in National Parks across America. [Development]

![ParkMate Query](https://media.giphy.com/media/JPaWp8AVZOL3XZrKOj/giphy.gif)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [CRUD API ROUTES](#CRUD)
    *[Comments](#Comments)
        *[GET /fetchParkData]
        *[GET /fetchAnimalImages/:query]
5. [Authors](#authors)

## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that postgres server is running. Nagivate to yor terminal, then use the command `npm run react-dev` to transpose the es6 files into a bundle using webpack and sping up the server on `localhost:5000`.

After the above steps, navigate to localhost:3000 and view the component!

## Requirements

> Must have Postgres installed and running on your workstation.
> Mush have node installed on your workstation

## Development

### Installing Dependencies

From within the root directory:

npm install

## CRUD API ROUTES

### GET /fetchParkData

> Given a search parameter, GET will fetch specified search query.

  * **Sample Call:** 

    `uri: https://developer.nps.gov/api/v1/alerts?q=covid&limit=10`


**Success Response**
  * **Status Code:** 200 
    * **Sample Content**:

      |Key              |Type  |
      |:--------------- |:-----|
      |`title`          |text  |
      |`description`    |text  |
      |`url`            |text  |
      
**Error Response:**
  * **Status Code:** 404 Bad Request Error:
  * **Conetent:** `{ error : "Bad Request Error" }`
  * **Sample Call:**


### GET /fetchAnimalImages/:query

> Given a search parameter, GET will fetch specified search query.

  * **Sample Call:** 
  
   `uri: https://pixabay.com/q=${search}&image_type=photo&pretty=true&per_page=25`
    
**Payload Params** 

      |Key              |Type  |
      |:--------------- |:-----|
      |`webFormatURL`   |text  |
      |`tags`           |text  |
   

**Success Response**
  * **Status Code:** 200 
    * **Sample Content**:
    
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
  
  ### GET /animals/find/:animal
  
  app.get('/animals/find/:animal', (req, res) => {
  db.retrieveAnimalRecord(req.params.animal)
  
 ```
 module.exports.retrieveAnimalRecord = (commonName) => {
return client.query('SELECT * FROM named inner join characteristics on characteristics.sciname = named.sciname WHERE comname LIKE '%${rat}%' ;')
}

module.exports.insertAnimalRecord = (fname, lname, tags) => {
return client.query('INSERT INTO capture (fname, lname. tags) VALUES (${fname}, ${lname}, ${tags}); ')
} 
```

## Authors
- **Phonxay Champasouk** - Software Engineer
