import React, { Component } from 'react';

function DisplaySearchModal({ displayAnimals, fetchAnimalImages })  {
  console.log('display animals', displayAnimals)
  if(displayAnimals){
  const imageCarousel = displayAnimals.map((image, index) =>
    <div key={image.url}>
      <img src={image.url} />
      <li>{image.tags}</li>
    </div>)
    return (
      <div id="display-search-modal">
        {imageCarousel}
      </div>
    )
  }else{
    return(
      <div>Loading....</div>
    )
  }

}
export default DisplaySearchModal;