import React from 'react';
import mapboxgl from 'mapbox-gl'
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic3cwendsIiwiYSI6ImNrM2YwdDAzcDAwOXIzb3FrZnY5aXBvN3YifQ.neKXdlR6Tv2byAYavJmEDg';

export const styles = {
    map: { topMargin: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

class MapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lng: 123.4547,
          lat: 41.6756,
          zoom: 16.38
        };
      }
    
      componentDidMount() {
        const { lng, lat, zoom } = this.state;
    
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [lng, lat],
          zoom
        });
    
        map.on('move', () => {
          const { lng, lat } = map.getCenter();
    
          this.setState({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
          });
        });
      }
    
      render() {
        return (
            <div ref={el => this.mapContainer = el} 
                 className="absolute top right left bottom"  
                 style={{marginTop: "2em", width: '1180px', height: '730px'}}
            />
        );
      }    
}

export default MapApp;
