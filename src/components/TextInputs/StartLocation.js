import {
    Autocomplete
} from "@react-google-maps/api";
import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/esm/Container'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../css/Location.css';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { changeStartLocation } from "../../redux/slices/startSlice";

const StartLocation = ({ onInputChange}) => {
  const [startLocation, setstartLocation] = useState('');
  const handleStartLocationChange = (e) => {
    const newValue = e.target.value;
    setstartLocation(e.target.newValue);

  };
  const inputRef1 = useRef(null);
    return (
        <>
            <Container fluid style={{display: 'flex', flexDirection: "row", width: "100vw", paddingTop: "10px", paddingBottom: "10px"}}>
            <Autocomplete className="autocompleteStart" style={{ zIndex: 1, position: 'absolute',paddingRight: "10px",}}>
            <TextField fullWidth
              onChange={handleStartLocationChange}
              id="input-with-icon-textfield"
              value={startLocation}
              label="Start"
              ref={inputRef1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"    style={{zIndex: 100}}  />
                </Autocomplete>
            </Container>
             
            
      </>
           
  )
}

export default StartLocation