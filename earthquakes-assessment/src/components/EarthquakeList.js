import React, { Component } from 'react';
import moment from 'moment';
import Earthquakes from '../data/earthquakes.js';


class EarthquakeList extends Component{
render(){
  let quakes = Earthquakes.features.map((earthquakeObject)=> {
    return(
      <div className="col-sm-6" key={earthquakeObject.id}>
        <div className="card" >
          <div className="card-block">
            <h4 className="card-title">{earthquakeObject.place}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakeObject.mag}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakeObject.time).format('llll')}</h6>
            <p className="card-text">Coordinates: {earthquakeObject.geometry.coordinates}</p>

            <a href={"earthquakeObject.url"} className="card-link">USGS Event Link</a>

          </div>
        </div>
      </div>
    )
  });


    return (
      <div className="quake-list">
      <div className="row">
        {quakes}
      </div>
      </div>
    );
  }
}


export default EarthquakeList;
