import React, { Component } from 'react';
import './Map.css';

import mapbox from 'mapbox-gl'

class Map extends Component {

  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1Ijoic2l0aWFpc2giLCJhIjoiY2pxdjF5bmFiMHFxNTQycGVmaDJvcHhmbCJ9.CbZ6rjERj7quZGePsgDdRw';

    var map = new mapbox.Map({
      container: 'section-map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  render() {
    return (
      <section className="section-map" id="section-map">
        <div className="map-ui-style">
          <button>
            hello
          </button>
        </div>
      </section>
    );
  }
}

export default Map;
