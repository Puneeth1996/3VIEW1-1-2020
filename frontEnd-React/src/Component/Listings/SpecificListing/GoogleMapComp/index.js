
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import style from './index.module.css'


class GoogleMapComp extends Component {   

    render() {
        const mystyle = {
            height: '40vh',
            width: '60%',
            color: "white",
            backgroundColor: "#07122c",
            marginLeft: '20vw',
            fontFamily: "Arial"
        };
        const position = [51.505, -0.09]
        return (
            <Map center={position} zoom={13} style={mystyle}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        )
    }
}

export default GoogleMapComp;