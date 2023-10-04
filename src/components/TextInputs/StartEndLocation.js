import {
  Autocomplete
} from "@react-google-maps/api";
import React, { useState, useRef} from 'react'
import Container from 'react-bootstrap/esm/Container'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../css/Location.css';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import Button from '@mui/material/Button';
import Select from 'react-select';
import { Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import toast, { Toaster } from 'react-hot-toast';
import App from "../../App";
import { Form } from 'react-bootstrap'
import '../../index.json'

export default function StartEndLocation({ callback1, callback2 }) {
  const [startLocation, setStartLocation] = useState('');
  const [transit, setTransit] = useState({ value: 'walking', label: 'WALKING' }); // Initialize with a default value
  const [open, setOpen] = React.useState(true);
  const [directionsResponse, setdirectionsResponse] = useState({});

  const handleTransitChange = (selectedOption) => {
    setTransit(selectedOption);
  };

  const handleInput1Change = (e) => {
    setStartLocation(e.target.value);
  };

  const handleInput2Change = (e) => {
    setDestination(e.target.value);
  };
  async function calRoute(start, end) {
    console.log(start, end);
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: "966 Lancaster Ave, Syracuse NY",
      destination: "966 Cumberland,Syracuse NY",
      travelMode: window.google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    });
    return results
  
  }
  async function handleSubmit() {
    console.log(selectedPlace.formatted_address);
    console.log(destination.formatted_address);
    console.log(transit.value);
    console.log(selectedPlace.name);
    toast.success('Loaded Your Route');
    const res = await calRoute(selectedPlace.formatted_address, destination.formatted_address)
    console.log(res)
    setdirectionsResponse(res)

  };

  const options = [
    { value: 'walking', label: 'WALKING' },
    { value: 'driving', label: 'DRIVING' },
  ];

  const [selectedPlace, setSelectedPlace] = useState(null);
  const autocompleteRef = useRef(null);
  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      // 'place' will contain the selected place data
      setSelectedPlace(place);
    }
  };
  const [destination, setDestination] = useState('');
  const destinationref = useRef(null)
  const handleDestnationChanged = () => {
    if (destinationref.current) {
      const place = destinationref.current.getPlace();
      setDestination(place)
    }
  }
  
  return (
    <>
              <Form>

      <Container fluid style={{ display: 'flex', flexDirection: "row", width: "100vw", paddingTop: "10px", paddingBottom: "10px" }}>

        <Autocomplete
                  ref={autocompleteRef} // Reference to the Autocomplete component
                  onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} // Assign the reference
                  onPlaceChanged={handlePlaceChanged} // Attach the onPlaceChanged handler
          className="autocompleteStart" style={{ zIndex: 1, position: 'absolute', paddingRight: "10px", }}>
          <TextField fullWidth
            onChange={handleInput1Change}
            id="input-with-icon-textfield"
            label="Start"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined" style={{ zIndex: 100 }} />
        </Autocomplete>
      </Container>
      <Container fluid style={{ display: 'flex', flexDirection: "row", width: "100vw", paddingTop: "10px", paddingBottom: "10px", paddingRight: "10px", }}>
        <Autocomplete
             ref={destinationref} // Reference to the Autocomplete component
             onLoad={(autocomplete) => (destinationref.current = autocomplete)} // Assign the reference
             onPlaceChanged={handleDestnationChanged} // Attach the onPlaceChanged handler
          className="autocompleteStart" style={{ zIndex: 1, position: 'absolute', paddingRight: "10px", }}>
          <TextField fullWidth
            id="input-with-icon-textfield"
            label="Destination"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssistantDirectionIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined" />
        </Autocomplete>
      </Container>
      <Container fluid style={{ paddingBottom: "10px", }}>
        <Select
          autoFocus
          className='selectTransitType'
          onChange={handleTransitChange}
          value={transit} // Use the selected transit option directly
          options={options}
          style={{ width: "90vw", zIndex: 10000 }}
          components={{
            IndicatorSeparator: null,
            DropdownIndicator: () => (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <Button onClick={handleSubmit} variant="outlined" style={{ backgroundColor: 'pink', color: 'black', outlineColor: 'white', borderColor: 'white', boxShadow: '1px solid black', }}>Search</Button>\
      </Form>

    </>
  );
}
