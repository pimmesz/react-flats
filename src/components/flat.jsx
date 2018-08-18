import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleClick() {
    this.props.select_flat({lat: this.props.lat, lng: this.props.lng});
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage : `url(${this.props.imageUrl})` }} onClick={this.handleClick.bind(this)} >
        <div className="card-category">${this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
          <h3>{this.state.clicked ? "YES" : "NO"}</h3>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
