import React, { Component } from 'react';

// Importing the flats data
import flats from '../../data/flats';

// Importing the components
import SimpleMap from './simple_map.jsx';
import FlatList from './flats_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      select_flat: null
    }
  }

  select = (location) => {
    this.setState({select_flat: location})
  }

  render() {
    const flats = this.state.flats;
    const select_flat = this.state.select_flat
    return (
      <div className="container">
          <FlatList flats={flats} select_flat={select_flat} select_flat_function={this.select} />
          <SimpleMap flats={flats} select_flat={select_flat} />
      </div>
      );
  }
}

export default App;
