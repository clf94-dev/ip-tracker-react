import React from 'react'
import L from 'leaflet'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'

import './styles/App.css'
var mymap;
function Map(props) {

    return (
        <LeafletMap
        center={[props.lat, props.lon]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[props.lat, props.lon]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>

    );

}

export default Map
