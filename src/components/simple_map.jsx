import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import API_KEY from '../../keys';

const AnyReactComponent = ({ img }) => <div>{img}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.885707,
      lng: 2.343543
    },
    zoom: 14
  };

  render() {
    if(this.props.select_flat === null){
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.flats.map(flat => {
          return (
          <AnyReactComponent
            lat={flat.lat}
            lng={flat.lng}
            img={<img src="http://www.clker.com/cliparts/v/E/r/a/2/E/google-maps-marker-for-residencelamontagne.svg.hi.png" className="marker" alt=""/>}
          />
          )
        })}
        </GoogleMapReact>
      </div>
    );
  } else {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
            lat={this.props.select_flat.lat}
            lng={this.props.select_flat.lng}
            img={<img src="http://www.clker.com/cliparts/v/E/r/a/2/E/google-maps-marker-for-residencelamontagne.svg.hi.png" className="marker" alt=""/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
}

export default SimpleMap;
