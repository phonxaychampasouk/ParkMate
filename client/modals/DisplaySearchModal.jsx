import React, { Component } from 'react';

//TODO: add onHoover over img to display tags animal
//STRETCH: as well as display what they eat and where

//TODO: onClick of tag user will persist to database
//TODO: add an onClick function
function DisplaySearchModal({ displayAnimals, fetchAnimalImages, closeModal, onClick }) {
  if (displayAnimals) {
    const imagesInFlex = displayAnimals.map((image, index) => {
      const tags = image.tags.split(",");
      const allTags = tags.map((tag, i) => (
        <li
          className="tags"
          value={tag}
          key={image.tags + i}
          onClick={() => onClick(tag)}>
          {tag}
        </li>
      ))
      return (
        <div className="search-results" key={image.url}>
          <div id="image-overlay-container">
        <img id="searched-image" src={image.url}/>
        <div className="tag-container">
          {allTags}
          </div>
        </div>
        </div >)})
  return (
    <div id="display-search-modal">
        {imagesInFlex}
    </div>
  )
} else {
  return (
    <div>Loading....</div>
  )
    }
  }
export default DisplaySearchModal;