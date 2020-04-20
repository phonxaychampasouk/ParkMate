import React from 'react';


function ParkData({ parkAlerts }) {
  let alerts = parkAlerts.map(message =>
    <h1>Alert:
      "{message.title}" --
      {message.description}
      for more information
        <h3>{message.url}</h3>
    </h1>
    )
  return (
    <div id="park-data">
      {alerts}
    </div>
  )

}
export default ParkData;