import React from 'react';

function KnownPredators({ knownPredators }) {
  const creature = knownPredators.map(catagory=>(
          <li key={catagory.sciname}>
          {catagory.known_predators}
        </li>

  ))
console.log('creature', creature)
  return (
    <div id="known-predators">
      Know Predators:
      {creature}
    </div>
  )
}

export default KnownPredators;