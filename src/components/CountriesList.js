import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CountriesList(props) {
  function displayAll() {
    return props.countries.map((eachCountry) => {
      return (
        <Link
          className="list-group-item list-group-item-action"
          to={`/country/${eachCountry.cca3}`}
        >
          {' '}
          {eachCountry.name.common}
        </Link>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">{displayAll()}</div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
