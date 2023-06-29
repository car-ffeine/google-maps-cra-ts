import { useState } from 'react';
import GoogleMap from './GoogleMap';

function App() {
  const [location, setLocation] = useState({ lat: 37.5656, lng: 126.9769 });
  const mapStyle = {
    minHeight: '70vh',
  };
  const zoom = 17;

  return (
    <>
      <GoogleMap
        apiKey={`${process.env.REACT_APP_API_KEY}`}
        location={location}
        style={mapStyle}
        zoom={zoom}
      />
      <button onClick={() => setLocation({ lat: 37.5656, lng: 126.9769 })}>이동</button>
    </>

  );
}


export default App;
