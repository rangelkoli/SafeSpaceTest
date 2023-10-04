import {
    Autocomplete
} from "@react-google-maps/api";
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Input } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../css/Location.css'
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const DestinationLocation = () => {
    return (
        <>
            <Container fluid style={{display: 'flex', flexDirection: "row", width: "100vw", paddingTop: "10px", paddingBottom: "10px",paddingRight: "10px",}}>

             <Autocomplete className="autocompleteStart" style={{ zIndex: 1, position: 'absolute',paddingRight: "10px",}}>
             
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
        variant="outlined"      />

                </Autocomplete>
            </Container>

      </>
           
  )
}

export default DestinationLocation