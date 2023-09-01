import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ChargingStations = () => {
    const [stations, setStations] = useState([]);
    const myAPIKey = '75370fe6aa48415bb0123e241120d8e0';
  
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.openchargemap.io/v3/poi?`, {
              params: {
                operatorId: 1, // Replace with the operator ID you want to filter by, or remove this line to show all stations
                includeComments: false
              }
            });
            // setStations(response.data);
            console.log(response.data)
            // {
            //     "type": "node",
            //     "id": 123456789,
            //     "lat": 51.123456,
            //     "lon": -0.123456,
            //     "tags": {
            //       "amenity": "charging_station",
            //       "name": "Sample Charging Station",
            //       "operator": "Example Operator"
            //     }
            //   }
          } catch (error) {
            console.error('Error fetching charging stations:', error);
          }
        };
    
        fetchData();
      }, []);
      
  
    return (
      <div>
        <h1>Charging Stations App</h1>
        <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* {stations.map((station, index) => (
            <Marker key={index} position={[station.latitude, station.longitude]}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))} */}
          <Marker position={[51.505, -0.09]}>
            <Popup>London</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };
  
  export default ChargingStations;
  