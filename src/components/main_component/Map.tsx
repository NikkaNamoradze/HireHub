import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import { styled } from 'styled-components';
import 'leaflet/dist/leaflet.css'

import locationIcon from '../../assets/icons/location.svg'

const MapComponent = ({lat, lng, address}:{lat:number, lng:number, address:string}) => {


      const locIcon = new Icon({
        iconUrl: locationIcon,
        iconSize: [50, 50],
      });
  return (


    <Container>

    <MapContainer center={[lat, lng] } zoom={15} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="HireHub"
      />
      <Marker position={[lat, lng]} icon={locIcon}>
        <Popup>
        {address}
      </Popup>
      </Marker>
    </MapContainer>
    </Container>
  );
};

export default MapComponent;

const Container = styled.div`
height: 50vh;
width: 100%;

`