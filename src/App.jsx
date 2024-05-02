import { useEffect } from 'react';
import { useState } from 'react'

function App(){
  const [geoLocation, setGeoLocation] = useState({ latitude:0, longitude:0})

  function fetchGeoLocation(callback){
    navigator.geolocation.getCurrentPosition((position) => {
        const data = { latitude:position.coords.latitude, 
                longitude:position.coords.longitude
              };
        callback(data)
      }, (error)=>{
        console.error("Error fetching geolocation",error)
      }
    );
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
  }, [])
  

  return(
    <>
      <h1>GeoTrack App</h1>
      <h3>A simple app to test and get geo location</h3>
      <p><strong>Latitude:</strong> {geoLocation.latitude}, <strong>Longtigude:</strong> {geoLocation.longitude}</p>
    </>
  )
}

export default App
