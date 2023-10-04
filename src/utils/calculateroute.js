import { GoogleMap, Marker, useJsApiLoader, HeatmapLayerF, MarkerF, InfoBoxF, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import React, {useState, useEffect, Text} from 'react'


export async function calculateroute(startLocation, DestinationLocation) {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: startLocation,
      destination: DestinationLocation,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
  return results
}