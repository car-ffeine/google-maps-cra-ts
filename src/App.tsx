import GoogleMap from './GoogleMap';

function App() {
  const location = { lat: 37.5656, lng: 126.9769 };
  const mapStyle = {
    minHeight: '100vh',
  };

  return (
    <GoogleMap
      apiKey={`${process.env.REACT_APP_API_KEY}`}
      location={location}
      style={mapStyle}
    />
  );
}


export default App;
