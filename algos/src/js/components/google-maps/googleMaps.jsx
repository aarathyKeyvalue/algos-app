import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useState } from 'react'
  import './styles.css';
  
  
  const App = (props) => {
    const { directionsResponse } = props;
    const center = { lat: 10.0114, lng: 76.3666 }
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))

    return (
      <div className="mapWrapper">        
      <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer  directions={directionsResponse}/>
            )}
          </GoogleMap>
      </div>
    );
  }
  
  export default App;
