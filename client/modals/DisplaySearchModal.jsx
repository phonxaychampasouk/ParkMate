import React, { Component } from 'react';

//TODO: add onHoover over img to display tags animal
//STRETCH: as well as display what they eat and where

function DisplaySearchModal({ displayAnimals, fetchAnimalImages, closeModal })  {
  console.log('display animals', displayAnimals)
  if(displayAnimals){
  const imagesInFlex = displayAnimals.map((image, index) =>
    <div key={image.url}>
      <img id="searched-image" src={image.url} />
      <li>{image.tags}</li>
    </div>)
    return (
      <div>
        <button type="button" onClick={closeModal}>X</button>
        <div id="display-search-modal">
          {imagesInFlex}
        </div>
      </div>
    )
  }else{
    return(
      <div>Loading....</div>
    )
  }

}
export default DisplaySearchModal;