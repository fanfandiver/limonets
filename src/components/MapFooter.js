import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class MapFooter extends React.Component {
  render() {
    return (
      <LeafletMap style={{ borderRadius: "50%", height: "200PX", width: "200px", border: "1px solid black"}}
        center={[45.8323, 4.7749]}
        zoom={12}
        maxZoom={18}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[45.8323, 4.7749]}>
          <Popup>
             limonets la maison ou il fait bon vivre
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default MapFooter