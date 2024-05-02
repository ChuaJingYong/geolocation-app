import { useEffect } from 'react';
import { useState } from 'react'

function App(){
  const [geoLocation, setGeoLocation] = useState({ latitude:0, longtigude:0})

  function fetchGeoLocation(callback){
    navigator.geolocation.getCurrentPosition((position) => {
        const data = { latitude:position.coords.latitude, 
                longtigude:position.coords.longitude
              };
        callback(data)
      });
  }

  console.log('geolcation',geoLocation)
 
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      fetchGeoLocation(data=>{
        console.log('location',data)
        setGeoLocation(data)
      })
    },1000) //refreshes geolocation every 1s

    return ()=>{clearInterval(intervalId)}
  })
  

  return(
    <>
      <h1>Geolocation App</h1>
      <p>Latitude: {geoLocation.latitude}, Longtigude: {geoLocation.longtigude}</p>
    </>
  )
}

export default App
