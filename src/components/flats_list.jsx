import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatsList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map(flat => {
          return <Flat name={flat.name} key={flat.name} lat={flat.lat} lng={flat.lng} imageUrl={flat.imageUrl} price={flat.price} select_flat={this.props.select_flat_function} flats={this.props.flats}/>
        })}
      </div>
    );
  }
}

export default FlatsList;
