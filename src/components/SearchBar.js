import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StartLocation from './TextInputs/StartLocation';
import DestinationLocation from './TextInputs/DestinationLocation';
import { Typography } from '@mui/material';
import Select from 'react-select'
import InputAdornment from '@mui/material/InputAdornment';
import './css/Location.css'
import StartEndLocation from './TextInputs/StartEndLocation';
import App from '../App';

<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvH6friS3gy2iJ7YUwOLoyp5y5xCeVlgU&libraries=places&callback=initMap">
</script>
function SearchBar({callback3, callback4}) {
  const [open, setOpen] = useState(true);
  const [startLoc, setstartLoc] = useState("")
  const [destinationLoc, setdestinationLoc] = useState("")
  const [startLocationValue, setStartLocationValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [transitValue, setTransitValue] = useState('');
  const [directionsResponse, setDirectionsResponse] = useState({});

  const handleStartValue = (start) => {
    setStartLocationValue(start);
    callback3(startLocationValue)

  };
  const handleDestinationValue = (end) => {
    setDestinationValue(end);
    callback4(destinationValue)

  };
  const handleDirectionsResponse = (response) => {
    setDirectionsResponse(response);
  };

  const asds = () => {
    console.log(startLocationValue)
    console.log(destinationValue)

  }

  return (
    <Container fluid className='d-flex justify-content-center' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignContent: 'center',textAlign:'center', zIndex: -99,position: 'relative', padding: "0px"}}> 
       <Collapse in={open}>
        <Form className="d-flex-column justify-content-center" style={{ paddingBottom: '10px', width: '100%', zIndex: -88 }} >
          <Container fluid style={{padding: 0}}>
            <Typography >Route:</Typography>
            <StartEndLocation callback1={handleStartValue} callback2={handleDestinationValue} />
            <Button onClick={asds}>hello</Button>
          </Container>
        </Form>
      </Collapse>
      <Container style={{backgroundColor: 'transparent'}}>
      {open ?<Container fluid><ExpandLessIcon
        style={{ backgroundColor: 'pink', borderRadius: '50px', zIndex: 1,}}
        onClick={() => setOpen(open)}
        aria-controls=""
          aria-expanded={open} /></Container>
          : <Container fluid><ExpandMoreIcon
        style={{ backgroundColor: 'pink', borderRadius: '50px' }}
        onClick={() => setOpen(!open)}
        aria-controls=""
        aria-expanded={open} /> </Container> }
      </Container>
    </Container>
  )
}
export default SearchBar;

