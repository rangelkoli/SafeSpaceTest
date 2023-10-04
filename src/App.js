/* global google */
import React, {useState, useEffect, Text} from 'react'
import {  memo, useMemo } from 'react'
import './index.css'
import { GoogleMap, Marker, useJsApiLoader, HeatmapLayerF, MarkerF, InfoBoxF, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import { MapDirectionsRenderer } from './App1';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar';
import Container from 'react-bootstrap/esm/Container';
import SearchBar from './components/SearchBar.js';
import Test from './components/Alerts/Test';
import PersistentDrawerLeft from './components/Alerts/Test';
import GeoLocation from './components/Geolocation';
import { getUserLocation } from './utils/geolocation';
import StartLocation from './components/TextInputs/StartLocation';
import { Toaster } from 'react-hot-toast';
import { pink } from '@mui/material/colors';
import { Button } from '@mui/material';
import { calculateroute } from './utils/calculateroute.js'

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 43.0322253,
  lng: -76.1230978
};
const heatMapData = {    
  positions: [
    { lat: 43.0322253, lng: -76.1230978 },
    {lat: 43.0322254, lng: -76.1230979},
    { lat: 43.0322255, lng: -76.1230980 },
    { lat: 43.0322256, lng: -76.1230978 },
    {lat: 43.0322257, lng: -76.1230979},
    { lat: 43.0322258, lng: -76.1230980 },
    { lat: 43.0322259, lng: -76.1230978 },
    {lat: 43.0322260, lng: -76.1230979},
    {lat: 43.0322261, lng: -76.1230980},
  ],
  options: {
    radius: 200,
    opacity: 1,
    height: 12,
  }   
}


function App() {

  const google=window.google
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDvH6friS3gy2iJ7YUwOLoyp5y5xCeVlgU",
    nonce: 'map',
    libraries: ["places","visualization"]
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Call the utility function to get user location
    getUserLocation((location) => {
      if (location) {
        setUserLocation(location);
      } else {
        // Handle the case where location is not available
      }
    });



    
  }, []);

  const [startLoc, setstartLoc] = useState("")
  const [destinationLoc, setdestinationLoc] = useState("")
  const [directionsResponse, setDirectionsResponse] = useState(null);

   if (startLoc) {
     const res = calculateroute(startLoc, destinationLoc)
    console.log(res)
  }

  const handleStartValue = (start) => {
    setstartLoc(start);

  };
  const handleDestinationValue = (end) => {
    setdestinationLoc(end);

  };
  async function calculateRoute() {
    console.log(startLoc)
    calculateroute("966 Lancaster Avenue, Syracuse,NY, 13210" , "966 Westcott, Syracuse")
  }
  
  async function asjdb() {
    const directionsService = new window.google.maps.DirectionsService();
    const results =  await directionsService.route({
      origin: "966 Lancaster Ave, Syracuse NY, 13120",
      destination: "966 Westcott,Syracuse NY",
      travelMode: window.google.maps.TravelMode.WALKINGfunction,
    });
    console.log(results)
    setDirectionsResponse(results)
  }
  return isLoaded ? (
    <>
              <Button onClick={asjdb} style={{position: 'absolute', margin: 0, left: 100, right: 100 , zindex: 98222555, }}> asdaslhb</Button>

      <Container className='containerMain' style={{ overflow: 'hidden', display: 'block', padding: '0px !important' }} >
        <Toaster
          position="bottom-center"
          />
        <PersistentDrawerLeft
          startLocation2={handleStartValue}
          destinationLoc2={handleDestinationValue}
          runFunc={calculateRoute} />
       <GoogleMap
        mapContainerStyle={containerStyle}
          center={{
            lat: 0,
            lng: 0
          }
        }
        zoom={15}
        onLoad={onLoad}
      onUnmount={onUnmount}
          options={{
            zoomControl: false,
            streetViewControl: false,
            
      }}

      >
      { /* Child components, such as markers, info windows, etc. */}
      <>
      <MarkerF position={{lat: userLocation.latitude,
            lng: userLocation.longitude}}></MarkerF>
      <HeatmapLayerF data={getPoints()} options={{opacity: 1, radius: 20}}> </HeatmapLayerF>
      {directionsResponse && (
  <DirectionsRenderer directions={directionsResponse} />
)}
      </>
        </GoogleMap>
      </Container>
      </>
  ) : <></>    
}
function getPoints() {
  return [
    new google.maps.LatLng(43.0322253, -76.1230978),
    new google.maps.LatLng(43.032138, -76.122770),
    new google.maps.LatLng(43.032439,-76.122771),

  ]
}

<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6qWIcomi4ODxMHgpEenCFV9VsA_h_8R0&libraries=visualization&callback=initMap">
</script>

export default React.memo(App)