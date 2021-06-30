import React, { useState, useEffect } from 'react';
import countries from '../countries.json';
import { Switch, Link, Route } from 'react-router-dom';

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    let con = countries.find(
      (eachCountry) => eachCountry.cca3 === props.match.params.dynamicId
    );
    setCountry(con);
  }, []);

  return (
    <div>
      CountryDetails {props.match.params.dynamicId}
      <div>{props.name}</div>
    </div>
  );
}

export default CountryDetails;
